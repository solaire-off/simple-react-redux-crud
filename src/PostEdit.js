import React, {Component} from 'react';
import {connect} from 'react-redux';

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
      <div>
        <form onSubmit={this.editThisPost}>
          <input
            required
            type="text"
            defaultValue={this.props.post.title}
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            defaultValue={this.props.post.message}
            ref={input => (this.getMessage = input)}
            placeholder="Enter Post Content"
          />
          <br />
          <br />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostEdit);
