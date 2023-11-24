import db from '../db.js';

const deleteHandler = (request, h) => {
    try {
        const id = request.params.bookId;
        const existingBook = db.getBook(id);
        if (!existingBook) {
            return h
                .response({ status: 'fail', message: 'Buku gagal dihapus. Id tidak ditemukan' })
                .code(404);
        }

        db.deleteBook(id);
        return h.response({ status: 'success', message: 'Buku berhasil dihapus' }).code(200);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default deleteHandler;
