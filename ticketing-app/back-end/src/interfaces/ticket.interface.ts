import Mongoose from 'mongoose';

export interface ITicket extends Mongoose.Document {
    ticketid: string;
    user: string;
    fullname: string;
    email: string;
    status: string;
    department: string;
    priority: string;
    subject: string;
    description: string;
    created: Date;
    duedate?: Date;
    closed?: boolean;
}