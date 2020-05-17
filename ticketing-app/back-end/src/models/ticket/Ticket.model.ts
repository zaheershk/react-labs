import Mongoose from 'mongoose';
import { ticketSchema } from './Ticket.schema';
import { ITicket } from "../../interfaces/ticket.interface";

const ticketModel: Mongoose.Model<ITicket> = Mongoose.model<ITicket>('Ticket', ticketSchema, 'Ticket');
export { ticketModel as TicketModel };