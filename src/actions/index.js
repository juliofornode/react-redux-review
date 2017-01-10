export function selectBookAction(book) {
    return {
        type: 'SELECTED_BOOK',
        data: book
    }
}

export function saveBook(book) {
    return {
        type: 'SAVE_BOOK',
        data: book
    }
}