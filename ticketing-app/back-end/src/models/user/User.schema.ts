import Mongoose from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { IUser } from '../../interfaces/user.interface';

const userSchema: Mongoose.Schema = new Mongoose.Schema({
    username: { type: String },
    password: { type: String },
    role: { type: String },
    date: { type: Date, default: Date.now },
    tickets: [{
        ticket: { type: Mongoose.Schema.Types.ObjectId, ref: 'Ticket' }
    }],
});

userSchema.pre('save', async function (this: IUser, next) {
    const hashedPassword = await hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = function (password: string): Promise<boolean> {
    const hashedPassword: string = (this as IUser).password;
    return compare(password, hashedPassword);
}

export { userSchema }; 