import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {Typography, Card, CardContent, Button} from '@material-ui/core';

class PostForm extends Component {
  postSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    };
    console.log(data);
    this.props.dispatch({
      type: 'ADD_POST',
      data,
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Create Post
          </Typography>
          <form onSubmit={this.postSubmit}>
            <TextField
              id="outlined-name"
              label="Enter Post Title"
              inputRef={input => (this.getTitle = input)}
              margin="dense"
              variant="outlined"
              fullWidth="true"
            />
            <TextField
              id="outlined-content"
              label="Enter Post Content"
              inputRef={input => (this.getMessage = input)}
              margin="dense"
              variant="outlined"
              multiline="true"
              fullWidth="true"
              rows="7"
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default connect()(PostForm);
