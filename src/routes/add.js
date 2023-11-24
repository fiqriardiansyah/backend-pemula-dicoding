import { nanoid } from 'nanoid';
import Utils from '../utils.js';
import db from '../db.js';

const addHandler = (request, h) => {
    try {
        const body = request.payload;
        Utils.checkBookProperty(body);
        const newBook = {
            ...body,
            id: nanoid(16),
            finished: Number(body.pageCount) === Number(body.readPage),
            insertedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        db.addBook(newBook);

        return h
            .response({
                data: { bookId: newBook.id },
                status: 'success',
                message: 'Buku berhasil ditambahkan',
            })
            .code(201);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default addHandler;
