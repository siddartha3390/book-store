import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../store/actions/bookActions';
import Modal from './Modal';
import { 
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { Book } from '../store/types/bookTypes';

interface Props {
  book: Book;
  onClose: () => void;
}

const EditBookModal: React.FC<Props> = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description || '');
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  useEffect(() => {
    setName(book.name);
    setPrice(book.price);
    setCategory(book.category);
    setDescription(book.description || '');
  }, [book]);

  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    if (!price || isNaN(Number(price))) {
      setPriceError('Price must be a number and is required');
      valid = false;
    } else {
      setPriceError('');
    }

    if (!category) {
      setCategoryError('Category is required');
      valid = false;
    } else {
      setCategoryError('');
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      dispatch(editBook({ id: book.id, name, price, category, description }));
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>Edit Book</h2>
      <TextField 
        label="Name" 
        variant="outlined" 
        fullWidth 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        margin="normal"
        error={!!nameError}
      />
      {nameError && <FormHelperText error>{nameError}</FormHelperText>}
      <TextField 
        label="Price" 
        variant="outlined" 
        fullWidth 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        margin="normal"
        error={!!priceError}
      />
      {priceError && <FormHelperText error>{priceError}</FormHelperText>}
      <TextField 
        label="Category" 
        variant="outlined" 
        fullWidth 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        margin="normal"
        error={!!categoryError}
      />
      {categoryError && <FormHelperText error>{categoryError}</FormHelperText>}
      <TextField 
        label="Description" 
        variant="outlined" 
        fullWidth 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Save Changes
      </Button>
    </Modal>
  );
};

export default EditBookModal;
