import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteBook } from '../store/actions/bookActions';
import EditBookModal from './EditBookModal';
import { 
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Book } from '../store/types/bookTypes';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseEdit = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <List>
        {books.map((book) => (
          <ListItem key={book.id} divider>
            <ListItemText 
              primary={book.name} 
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {book.price} - {book.category}
                  </Typography>
                  <br />
                  {book.description}
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(book)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(book.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {selectedBook && <EditBookModal book={selectedBook} onClose={handleCloseEdit} />}
    </div>
  );
};

export default BookList;
