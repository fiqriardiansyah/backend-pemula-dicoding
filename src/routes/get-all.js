import db from '../db.js';

const getAllHandler = (request, h) => {
    try {
        const { name, reading, finished } = request.query;
        const books = db.getAllBook();
        const bookWithFilter = (() => {
            let filtered = books;

            if (name !== undefined) {
                filtered = filtered.filter((item) =>
                    item.name?.toLowerCase()?.includes(name?.toLowerCase())
                );
            }

            if (reading !== undefined) {
                filtered = filtered.filter((item) => Boolean(Number(reading)) === item.reading);
            }

            if (finished !== undefined) {
                filtered = filtered.filter((item) => Boolean(Number(finished)) === item.finished);
            }

            return filtered;
        })();

        return h.response({ data: { books: bookWithFilter }, status: 'success' }).code(200);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default getAllHandler;
