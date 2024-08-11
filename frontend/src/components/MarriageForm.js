import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MarriageForm = ({ contract }) => {
  const [form, setForm] = useState({
    groomName: '',
    brideName: '',
    weddingDate: '',
    congratulationsMessage: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const tx = await contract.registerMarriage(
        form.groomName,
        form.brideName,
        form.weddingDate,
        form.congratulationsMessage
      );
      await tx.wait();
      alert('Marriage registered successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to register marriage.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Groom's Name"
        name="groomName"
        variant="outlined"
        fullWidth
        margin="normal"
        value={form.groomName}
        onChange={handleChange}
      />
      <TextField
        label="Bride's Name"
        name="brideName"
        variant="outlined"
        fullWidth
        margin="normal"
        value={form.brideName}
        onChange={handleChange}
      />
      <TextField
        label="Wedding Date"
        name="weddingDate"
        variant="outlined"
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={form.weddingDate}
        onChange={handleChange}
      />
      <TextField
        label="Congratulations Message"
        name="congratulationsMessage"
        variant="outlined"
        fullWidth
        margin="normal"
        value={form.congratulationsMessage}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register Marriage'}
      </Button>
    </Box>
  );
};

export default MarriageForm;
