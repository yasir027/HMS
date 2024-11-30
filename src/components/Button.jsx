import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, onClick, color = 'primary', size = 'medium' }) => {
  return (
    <MUIButton 
      variant="contained" 
      color={color} 
      size={size} 
      onClick={onClick}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
