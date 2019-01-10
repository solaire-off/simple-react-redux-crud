import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Modal,
  Typography,
  Card,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';

var modalContentStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  width: '100%',
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%)`,
};

class PostEdit extends Component {
  editThisPost = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({type: 'UPDATE_POST', id: this.props.post.id, data: data});
  };
  render() {
    return (
      <Modal open={true}>
      <Card style={modalContentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Edit Post
          </Typography>
          <form onSubmit={this.editThisPost}>
            <TextField
              required
              id="outlined-name-edit"
              label="Enter Post Title"
              inputRef={input => (this.getTitle = input)}
              defaultValue={this.props.post.title}
              margin="dense"
              variant="outlined"
              fullWidth="true"
            />
            <TextField
              required
              id="outlined-content-edit"
              label="Enter Post Contente"
              inputRef={input => (this.getMessage = input)}
              defaultValue={this.props.post.message}
              margin="dense"
              variant="outlined"
              multiline="true"
              rows="10"
              fullWidth="true"
            />
            <Button type="submit" variant="contained" color="primary" >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
      </Modal>
    );
  }
}

export default connect()(PostEdit);
