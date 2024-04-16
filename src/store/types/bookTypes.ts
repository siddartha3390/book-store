export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';

export interface Book {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
}

export interface AddBookAction {
  type: typeof ADD_BOOK;
  payload: Book;
}

export interface DeleteBookAction {
  type: typeof DELETE_BOOK;
  payload: number;
}

export interface EditBookAction {
  type: typeof EDIT_BOOK;
  payload: Book;
}

export type BookActionTypes = AddBookAction | DeleteBookAction | EditBookAction;
