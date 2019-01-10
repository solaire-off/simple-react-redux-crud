import React, {Component} from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <PostForm/>
        <PostList/>
      </div>
    );
  }
}

export default App;
