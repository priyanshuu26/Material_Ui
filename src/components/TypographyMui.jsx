import React from 'react';
import { Typography } from '@mui/material';

function TypographyMui() {
  return (
    <div>
      <Typography variant="h1">Hello Word H1</Typography>
      <Typography variant="noWrap">Hello Word "noWrap"</Typography> <br />
      <Typography variant="overline">Hello Word "overline"</Typography>
      <Typography variant="h4" component="h1">
        Hello Word "component H1"
      </Typography>
      <Typography variant="h5">Hello Word H5</Typography>
      <Typography variant="h6">Hello Word H6</Typography>
      <Typography variant="subtitle1"> Subtitle 1</Typography>
      <Typography variant="subtitle2"> Subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis
        possimus iusto provident perspiciatis quisquam maxime, sapiente soluta
        minima temporibus eligendi eum. Iste cupiditate saepe repudiandae
        dolores! Quas, ab commodi?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        maiores quis voluptas voluptate numquam excepturi a, similique accusamus
        neque tenetur quas sit quibusdam voluptatibus perferendis ad qui
        eligendi tempora dolores.
      </Typography>
    </div>
  );
}

export default TypographyMui;
