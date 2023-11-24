const db = {
    books: [],
    addBook(book) {
        this.books.push(book);
    },
    getAllBook() {
        return this.books;
    },
    getBook(id) {
        const book = this.books.find((item) => item.id === id);
        if (!book) return null;
        return book;
    },
    updateBook(id, update) {
        this.books = this.books.map((book) => {
            if (book.id !== id) return book;
            return {
                ...book,
                ...update,
            };
        });
    },
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    },
};

export default db;
