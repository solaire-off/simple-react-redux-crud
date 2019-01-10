import React, {Component} from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';

var containerStyle = {
  maxWidth: '1170px',
  margin: '0 auto',
  width: '100%',
  marginTop: '25px'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={containerStyle}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Simple React Redux Crud
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div style={containerStyle}>
          <Grid container spacing={24}>
            <Grid item lg={4} md={5} xs={12}>
              <PostForm />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <PostList />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
