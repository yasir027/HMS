import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, type = 'text', placeholder, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
