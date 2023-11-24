import db from '../db.js';
import Utils from '../utils.js';

const updateHandler = (request, h) => {
    try {
        const body = request.payload;
        const id = request.params.bookId;
        Utils.checkBookProperty(body);
        const existingBook = db.getBook(id);
        if (!existingBook) {
            return h
                .response({ status: 'fail', message: 'Gagal memperbarui buku. Id tidak ditemukan' })
                .code(404);
        }

        const update = {
            ...body,
            finished: Number(body.pageCount) === Number(body.readPage),
            updatedAt: new Date().toISOString(),
        };

        db.updateBook(id, update);
        return h.response({ status: 'success', message: 'Buku berhasil diperbarui' }).code(200);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default updateHandler;
