import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import PostEdit from './PostEdit';
import {Grid, Fade} from '@material-ui/core';

class PostList extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        {this.props.posts.map(post => (
          <Fade in={true}>
            <Grid key={post.id} item xs={12}>
              {post.editing ? (
                <div>
                  <Post post={post} key={post.id} />
                  <PostEdit post={post} key={post.id} />
                </div>
              ) : (
                <Post post={post} key={post.id} />
              )}
            </Grid>
          </Fade>
        ))}
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(PostList);
