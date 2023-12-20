// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpandLess, ExpandMore, Mail } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React, { useState } from 'react';

function MuiList() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: '400px', bgcolor: 'red' }} margin="auto">
      <List subheader={<ListSubheader>List Mui</ListSubheader>}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="list 1" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="list 2" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="list 3" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List 4" />
            <ListItemIcon>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto">
          <List>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText primary="hello" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default MuiList;
