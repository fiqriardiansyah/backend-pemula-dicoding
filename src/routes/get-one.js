import db from '../db.js';

const getOneHandler = (request, h) => {
    try {
        const id = request.params.bookId;
        const book = db.getBook(id);
        if (!book) {
            return h.response({ status: 'fail', message: 'Buku tidak ditemukan' }).code(404);
        }
        return h.response({ status: 'success', data: { book } }).code(200);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default getOneHandler;
