import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Typography, Card, CardActions, CardContent, Button} from '@material-ui/core';

class Post extends Component {
  postDelete = e => {
    e.preventDefault();
    this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id});
  };
  postEdit = e => {
    e.preventDefault();
    this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id});
  };
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.post.title}
          </Typography>
          <Typography component="p">{this.props.post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.postEdit} size="small" color="primary">
            Edit
          </Button>
          <Button onClick={this.postDelete} size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default connect()(Post);
