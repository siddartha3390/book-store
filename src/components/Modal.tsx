import React from 'react';
import { 
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onClose: () => void;
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <Paper 
        sx={{
          position: 'relative',
          width: '80%',
          maxWidth: 400,
          padding: 4,
          borderRadius: 4,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton 
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Paper>
    </Box>
  );
};

export default Modal;
