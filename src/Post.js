import React, {Component} from 'react';
import {connect} from 'react-redux';

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
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button onClick={this.postEdit}>Edit</button>
        <button onClick={this.postDelete}>Delete</button>
      </div>
    );
  }
}

export default connect()(Post);
