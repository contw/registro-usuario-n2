import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAddUser({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}
