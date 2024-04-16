import { ADD_BOOK, Book, DELETE_BOOK, EDIT_BOOK } from '../types/bookTypes';

const initialState: Book[] = [];

const bookReducer = (state = initialState, action: any): Book[] => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case EDIT_BOOK:
      return state.map((book) => (book.id === action.payload.id ? { ...book, ...action.payload } : book));
    default:
      return state;
  }
};

export default bookReducer;
