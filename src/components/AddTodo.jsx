import React from 'react';
import { TextField, Paper, Button, Grid } from '@mui/material';

const AddTodo = (props) => (
  <Paper style={{ margin: 16, padding: 16, backgroundColor: '#f5f5f5' }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add To Do"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          onClick={props.onButtonClick}
          style={{ backgroundColor: '#1976d2', color: '#ffffff', marginTop: 8 }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);
export default AddTodo;
