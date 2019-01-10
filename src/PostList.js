import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import PostEdit from './PostEdit';

class PostList extends Component {
  render() {
    return (
      <div>
        <h1>PostList</h1>
        {console.log(this.props.posts)}
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <PostEdit post={post} key={post.id} />
            ) : (
              <Post post={post} key={post.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(PostList);
