import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Dropdown = ({ label, options, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select onChange={(e) => onChange(e.target.value)} label={label}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
