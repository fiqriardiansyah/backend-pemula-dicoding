const Utils = {
    checkBookProperty(book, isUpdate) {
        if (!book?.name?.trim()) {
            throw new Error(
                isUpdate
                    ? 'Gagal memperbarui buku. Mohon isi nama buku'
                    : 'Gagal menambahkan buku. Mohon isi nama buku'
            );
        }
        if (book?.pageCount === undefined || book?.readPage === undefined) {
            throw new Error('page count and read page is required');
        }
        if (Number(book?.readPage) > Number(book?.pageCount)) {
            throw new Error(
                isUpdate
                    ? 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
                    : 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
            );
        }
    },
};

export default Utils;
