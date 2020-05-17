import Koa from 'koa';
import koaCors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import { registerRoutes } from './routes';
import http from 'http';
import socketIO from 'socket.io';
import { global } from './sockets/global';

async function serverSetUp() {
    const server: Koa = new Koa();
    configureMiddlewares(server);
    await startServer(server);
}

function configureMiddlewares(server: Koa) {
    server.use(bodyParser());
    server.use(koaCors());

    const routes = registerRoutes().routes();
    server.use(routes);
}

async function startServer(server: Koa) {
    try {
        const serverPort = 4000;

        // const serverStarted: Promise<void> = new Promise((resolve) => {
        //     server.listen(serverPort, resolve)
        // });
        // await serverStarted;
        // console.log(`Server running on port ${serverPort}`)

        const httpServer = new http.Server(server.callback());
        const io = socketIO(httpServer);
        global(io);

        httpServer.listen(serverPort, () => {
            console.log(`Server running on port ${serverPort}`);
        });
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export { serverSetUp };
