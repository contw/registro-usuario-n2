import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>Nenhum usuário cadastrado.</p>;
  }

  return (
    <List>
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary={user.name}
              secondary={user.email}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
