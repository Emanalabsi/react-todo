import React, { memo } from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@mui/material';
const Layout = memo((props) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));
export default Layout;
