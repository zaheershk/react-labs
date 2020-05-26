import { Context } from 'koa';
import HTTP_STATUS from 'http-status-codes';
import { UserModel } from '../../models/user/User.model';

export class User {
    public async getUser(ctx: Context): Promise<void> {
        try {
            const { id } = ctx.state.user;
            const user = await UserModel.findOne({ _id: id }, { password: 0 }).populate('tickets.ticket');

            ctx.response.status = HTTP_STATUS.OK;
            ctx.body = { message: 'User found successfully', user };
        } catch (error) {
            console.log(error);
            ctx.body = error;
        }
    }
}