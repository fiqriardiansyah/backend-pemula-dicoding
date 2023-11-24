const Utils = {
    checkBookProperty(book) {
        if (!book?.name?.trim()) {
            throw new Error('Failed to save book. Please fill the books name');
        }
        if (!book?.pageCount || !book?.readPage) {
            throw new Error('page count and read page is required');
        }
        if (Number(book?.readPage) > Number(book?.pageCount)) {
            throw new Error(
                'Failed to save book. read page is not allowed to bigger than page count'
            );
        }
    },
};

export default Utils;
