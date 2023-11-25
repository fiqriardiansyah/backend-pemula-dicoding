import db from '../db.js';

const getAllHandler = (request, h) => {
    try {
        const { name, reading, finished } = request.query;
        const books = db
            .getAllBook()
            ?.filter((item) =>
                !name ? true : item.name?.toLowerCase()?.includes(name?.toLowerCase())
            )
            ?.filter((item) =>
                reading === undefined ? true : Boolean(Number(reading)) === item.reading
            )
            ?.filter((item) =>
                finished === undefined ? true : Boolean(Number(finished)) === item.finished
            )
            ?.map((item) => ({
                id: item.id,
                name: item.name,
                publisher: item.publisher,
            }));

        return h.response({ data: { books }, status: 'success' }).code(200);
    } catch (e) {
        return h.response({ message: e.message, status: 'fail' }).code(400);
    }
};

export default getAllHandler;
