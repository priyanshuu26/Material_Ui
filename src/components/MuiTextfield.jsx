import React from 'react';
import { InputAdornment, TextField } from '@mui/material';

function MuiTextfield() {
  return (
    <div>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Standard" variant="standard" />
      <TextField label="filled" variant="filled" />

      <TextField
        label="Read only"
        variant="outlined"
        required
        inputProps={{ readOnly: true }}
      />
      <TextField label="Standard" variant="outlined" helperText="helpertext" />
      <TextField
        label="password"
        variant="outlined"
        helperText="you cant see password"
        required
        type="password"
      />
      <TextField
        label="amount"
        inputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="weight"
        inputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />
    </div>
  );
}

export default MuiTextfield;
