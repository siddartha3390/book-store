import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';
import { 
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
          <AddBookModal />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: 8 }}>
        <BookList />
      </Container>
    </Provider>
  );
};

export default App;
