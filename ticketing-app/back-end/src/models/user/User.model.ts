import Mongoose from 'mongoose';
import { userSchema } from './User.schema';
import { IUser } from "../../interfaces/user.interface";

const userModel: Mongoose.Model<IUser> = Mongoose.model<IUser>('User', userSchema, 'User');
export { userModel as UserModel };

