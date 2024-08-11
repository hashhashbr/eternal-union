import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} Eternal Union</Typography>
    </Box>
  );
};

export default Footer;
