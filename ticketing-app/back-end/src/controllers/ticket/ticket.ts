import Joi from '@hapi/joi';
import { Context } from 'koa';
import { v4 as uuidv4 } from 'uuid';
import HTTP_STATUS from 'http-status-codes';
import { ITicket } from "../../interfaces/ticket.interface";
import { UserModel } from '../../models/user/User.model';
import { TicketModel } from '../../models/ticket/Ticket.model';

export class Ticket {
    public async getAllTickets(ctx: Context): Promise<void> {
        try {
            const tickets = await TicketModel.find({}).sort({ created: -1 });

            ctx.response.status = HTTP_STATUS.OK;
            ctx.body = tickets;
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }

    public async addTicket(ctx: Context): Promise<void> {
        try {
            const body: ITicket = ctx.request.body;

            const schema = Joi.object().keys({
                fullname: Joi.string().required(),
                email: Joi.string().required(),
                department: Joi.string().required(),
                priority: Joi.string().required(),
                subject: Joi.string().required(),
                description: Joi.string().required(),
            });

            const value: ITicket = await schema.validateAsync(body);
            const { id } = ctx.state.user;

            value.user = id;
            value.ticketid = `${uuidv4()}`;

            const ticket = await TicketModel.create(value);
            if (ticket) {
                await UserModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        $push: {
                            tickets: {
                                ticket: ticket._id
                            }
                        }
                    }
                );
                ctx.response.status = HTTP_STATUS.CREATED;
                ctx.body = { message: 'Ticket added successfully.', ticket };
            }
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }

    public async editTicket(ctx: Context): Promise<void> {
        try {
            const body: ITicket = ctx.request.body;
            const { id } = ctx.params;

            const schema = Joi.object().keys({
                fullname: Joi.string().optional(),
                email: Joi.string().optional(),
                department: Joi.string().optional(),
                priority: Joi.string().optional(),
                subject: Joi.string().optional(),
                description: Joi.string().optional(),
            });

            const value: ITicket = await schema.validateAsync(body);

            await TicketModel.updateOne(
                {
                    _id: id
                },
                {
                    fullname: value.fullname,
                    email: value.email,
                    department: value.department,
                    priority: value.priority,
                    subject: value.subject,
                    description: value.description
                }
            );

            ctx.response.status = HTTP_STATUS.OK;
            ctx.body = { message: 'Ticket updated successfully.' };
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }

    public async closeTicket(ctx: Context): Promise<void> {
        try {
            const { _id } = ctx.params;

            await TicketModel.updateOne(
                {
                    _id
                },
                {
                    status: 'Closed',
                    closed: true,
                    duedate: new Date()
                }
            );

            ctx.response.status = HTTP_STATUS.OK;
            ctx.body = { message: 'Ticket closed successfully.' };
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }

    public async deleteTicket(ctx: Context): Promise<void> {
        try {
            const { _id } = ctx.params;
            const { id } = ctx.state.user;

            await TicketModel.deleteOne({ _id });

            await UserModel.updateOne(
                {
                    _id: id
                },
                {
                    $pull: {
                        tickets: {
                            ticket: _id
                        }
                    }
                }
            );

            ctx.response.status = HTTP_STATUS.NO_CONTENT;
            ctx.body = { message: 'Ticket deleted successfully.' };
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }
}

