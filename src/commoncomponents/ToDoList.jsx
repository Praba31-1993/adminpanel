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
import { networkData } from './Datas';
import './Common.css'


export default function ToDoList() {
  return (
    <List >
      {networkData?.map((data) => (
        <>
          <ListItem>
            <Typography style={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>
              <ListItemAvatar style={{ marginTop: '8px' }}>
              <Avatar alt="Remy Sharp" src={""} />
              </ListItemAvatar>
              <ListItemText primary={data?.name} secondary={`${data?.role},${data?.company_name}`} />
            </Typography>
            <Typography className='networkButtons' style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
              <Button variant='contained'>Invite</Button>
              <Button variant='outlined'>Cancel</Button>

            </Typography>
          </ListItem>
        </>
      ))}

    </List>
  );
}