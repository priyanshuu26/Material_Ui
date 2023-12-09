import React, { useState } from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import {
  AddCircle,
  AdsClick,
  Delete,
  PlusOne,
  RemoveCircle,
  RemoveSharp,
  Send,
} from '@mui/icons-material';

function MuiButton() {
  const [value, setValue] = useState(0);
  return (
    <Stack spacing={4} direction="column" marginTop={3}>
      <Stack spacing={2} direction="row">
        <Typography variant="overline">Types of buttons:</Typography>
        <Button variant="text">text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="overline">Colors of buttons :</Typography>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>
      <Stack spacing={3} direction="row">
        <Typography variant="overline">Size of buttons :</Typography>
        <Button variant="contained" size="large">
          Large size
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Medium size
        </Button>
        <Button variant="contained" size="small">
          Small size
        </Button>
      </Stack>
      <Stack spacing={6} direction="row">
        <Typography variant="overline">Disablity of button :</Typography>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" disableElevation>
          Disabled Elevation
        </Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Typography variant="overline">Buttons with icons and label</Typography>
        <Button variant="outline" startIcon={<Delete />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Typography variant="overline">Icon Buttons:</Typography>
        <IconButton aria-label="send" color="secondary">
          <Send />
        </IconButton>
        <IconButton aria-label="delete" color="secondary">
          <Delete />
        </IconButton>
      </Stack>
      <Stack spacing={4} direction="row">
        <Typography variant="overline">Functional buttons:</Typography>
        <IconButton
          aria-label="send"
          color="secondary"
          onClick={() => alert('you clicked me')}
        >
          <AdsClick />
        </IconButton>
        <IconButton
          aria-label="increment"
          color="success"
          onClick={() => setValue(value + 1)}
        >
          <AddCircle />
        </IconButton>
        <Typography variant="h5">{value}</Typography>
        <IconButton
          aria-label="decrement"
          color="error"
          onClick={() => setValue(value - 1)}
        >
          <RemoveCircle />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
