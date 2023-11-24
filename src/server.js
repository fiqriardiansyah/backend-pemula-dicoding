import Hapi from '@hapi/hapi';
import routes from './routes/index.js';

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`server running on port ${server.info.uri}`);
};

init();
