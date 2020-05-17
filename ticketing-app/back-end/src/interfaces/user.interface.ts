import Mongoose from 'mongoose';

export interface IUser extends Mongoose.Document {
    username: string;
    password: string;
    role?: string;
    date?: Date;
    //tickets?: string[];

    comparePassword(password: string): Promise<boolean>;
}