import { ADD_BOOK, Book, DELETE_BOOK, EDIT_BOOK } from '../types/bookTypes';

export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id: number) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const editBook = (book: Book) => ({
  type: EDIT_BOOK,
  payload: book,
});
