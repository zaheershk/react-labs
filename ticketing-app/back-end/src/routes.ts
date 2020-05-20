import Router from 'koa-router';
import { verifyToken } from './utils/auth';
import { Auth } from './controllers/auth/auth';
import { User } from './controllers/user/user';
import { Ticket } from './controllers/ticket/ticket';

export function registerRoutes() {
    const router = new Router();

    //define routes

    // auth-routes
    router.post('/register', Auth.prototype.register);
    router.post('/login', Auth.prototype.login);

    // user-routes
    router.get('/user', User.prototype.getUser);

    // ticket-routes
    router.get('/tickets', verifyToken, Ticket.prototype.getAllTickets);
    router.post('/tickets/add', verifyToken, Ticket.prototype.addTicket);
    router.put('/tickets/:id', verifyToken, Ticket.prototype.editTicket);
    router.put('/tickets/:_id/close', verifyToken, Ticket.prototype.closeTicket);
    router.delete('/tickets/:_id', verifyToken, Ticket.prototype.deleteTicket);

    return router;
}