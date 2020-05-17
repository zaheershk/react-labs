import Mongoose from 'mongoose';

const ticketSchema: Mongoose.Schema = new Mongoose.Schema({
    ticketid: { type: String },
    user: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
    fullname: { type: String },
    email: { type: String },
    status: { type: String, default: 'Open' },
    department: { type: String },
    priority: { type: String },
    subject: { type: String },
    description: { type: String },
    created: { type: Date, default: Date.now },
    duedate: { type: Date },
    closed: { type: Boolean, default: false },
});

export { ticketSchema }; 