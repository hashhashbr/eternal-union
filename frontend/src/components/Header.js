import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <FavoriteIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Eternal Union</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
