import { combineReducers } from 'redux';
import BookListReducer from './reducer_book_list';
import SelectedBookReducer from './reducer_selected_book';
import SaveBooksReducer from './reducer_save_book';

const rootReducer = combineReducers({
  booksFromReducer: BookListReducer,
  selectedBookFromReducer: SelectedBookReducer,
  savedBooksFromReducer: SaveBooksReducer
});

export default rootReducer;
