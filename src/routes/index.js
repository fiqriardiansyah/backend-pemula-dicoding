import addHandler from './add.js';
import deleteHandler from './delete.js';
import getAllHandler from './get-all.js';
import getOneHandler from './get-one.js';
import updateHandler from './update.js';

const routes = [
    {
        path: '/books',
        method: 'GET',
        handler: getAllHandler,
    },
    {
        path: '/books',
        method: 'POST',
        handler: addHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'GET',
        handler: getOneHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'PUT',
        handler: updateHandler,
    },
    {
        path: '/books/{bookId}',
        method: 'DELETE',
        handler: deleteHandler,
    },
];
export default routes;
