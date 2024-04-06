import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Button, Typography } from '@mui/material';
import './Common.css'


export default function ToDoList() {
  return (
    <List >
      <ListItem>
        <Typography style={{  width: '60%', display:'flex', justifyContent:'space-between'  }}>
          <ListItemAvatar style={{marginTop:'10px'}}>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jack" secondary="CEO, Sas Tech" />
        </Typography>
        <Typography className='networkButtons' style={{ width: '40%', display:'flex', justifyContent:'space-between' }}>
          <Button variant='contained'>Invite</Button>
          <Button variant='outlined'>Cancel</Button>

        </Typography>
      </ListItem>
    </List>
  );
}