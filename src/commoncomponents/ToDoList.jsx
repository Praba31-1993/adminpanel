import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, Typography } from '@mui/material';
import { networkData } from './Datas';
import './Common.css'

export default function ToDoList() {
  const [userId, setUserId] = useState([])
  const [declinedId, setDeclinedId] = useState([])
  const [users, setUsers] = useState(networkData)

  // Click function for Invite button.
  const handleInvite = (id) => {
    let newUserId = [...userId];
    newUserId.push(id);
    setUserId(newUserId)
  }

  // Click function for Decline button.
  const handleDecline = (id) => {
    const newUserId = userId.filter(userId => userId !== id);
    if (newUserId) {
      let newDeclinedId = [...declinedId]
      newDeclinedId.push(id)
      setDeclinedId(newDeclinedId)
    }
  }
  return (
    <List >
      {users?.map((data, index) => (
        <>
          <ListItem>
            <Typography style={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>
              <ListItemAvatar style={{ marginTop: '8px' }}>
                <Avatar alt="Remy Sharp" src={""} />
              </ListItemAvatar>
              <ListItemText primary={data?.name} secondary={`${data?.role},${data?.company_name}`} />
            </Typography>
            <Typography className='networkButtons' style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>

              <Button variant='contained' color={userId.includes(data?.id) ? "success" : "primary"}
                disabled={declinedId?.includes(data?.id)}
                onClick={() => handleInvite(data?.id)}>{userId.includes(data?.id) ? "Accepted" : "Accept"}</Button>

              <Button variant='outlined' disabled={userId?.includes(data?.id)} color={declinedId.includes(data?.id) ? "success" : "primary"} onClick={() => handleDecline(data?.id)}>{declinedId.includes(data?.id) ? "Declined" : "Decline"}</Button>
            </Typography>
          </ListItem>
        </>
      ))}

    </List>
  );
}