import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/actions/bookActions';
import Modal from './Modal';
import { 
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material';

const AddBookModal: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [categoryError, setCategoryError] = useState('');

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
      const id = Date.now(); // Generate unique ID
      dispatch(addBook({ id, name, price, category, description }));
      setName('');
      setPrice('');
      setCategory('');
      setDescription('');
      setShowModal(false);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
        Add Book
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Add Book</h2>
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
            Add Book
          </Button>
        </Modal>
      )}
    </>
  );
};

export default AddBookModal;
