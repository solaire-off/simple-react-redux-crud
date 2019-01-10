import React, {Component} from 'react';
import {connect} from 'react-redux';
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
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.postSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            placeholder="Enter Post Content"
            ref={input => (this.getMessage = input)}
          />
          <br />
          <br />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
