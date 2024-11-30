import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CheckboxGroup = ({ label, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updated = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((o) => o !== value);
    setSelectedOptions(updated);
    onChange(updated);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={options[0]}
              checked={selectedOptions.includes(options[0])}
              onChange={handleCheckboxChange}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
};

export default CheckboxGroup;
