import HTTP_STATUS from 'http-status-codes';
import JWT from 'jsonwebtoken';
import { Context } from 'koa';

export async function verifyToken(ctx: Context, next: () => void) {
    if (!ctx.request.headers.authorization) {
        ctx.response.status = HTTP_STATUS.UNAUTHORIZED;
        ctx.body = { message: 'Missing authorization header.' };
        return;
    }

    const token = ctx.request.headers.authorization.split(' ')[1];
    if (!token) {
        ctx.response.status = HTTP_STATUS.FORBIDDEN;
        ctx.body = { message: 'Missing token.' };
        return;
    }

    try {
        const decode: any = JWT.verify(token, 'test secret');
        ctx.state.user = decode.data;
    } catch (error) {
        console.log(error);
        ctx.response.status = HTTP_STATUS.UNAUTHORIZED;
        ctx.body = { message: 'Invalid token.' };
    }

    await next();
}