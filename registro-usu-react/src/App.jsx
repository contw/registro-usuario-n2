import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Cadastro de Usuários
      </Typography>

      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} centered>
        <Tab label="Cadastrar" />
        <Tab label="Usuários Cadastrados" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && <UserForm onAddUser={handleAddUser} />}
        {tabIndex === 1 && <UserList users={users} />}
      </Box>
    </Container>
  );
}
