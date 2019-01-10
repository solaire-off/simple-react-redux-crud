const initState = [
  {
    id: 1,
    title: 'Make Web Great Again',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    editing: false,
  },
  {
    id: 2,
    title: 'CSS > JS',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    editing: false,
  },
  {
    id: 3,
    title: "be iMproved, it's 21st Century ;-)",
    message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    editing: false,
  },
];


const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);
    case 'EDIT_POST':
      return state.map(post =>
        post.id === action.id ? {...post, editing: !post.editing} : post,
      );
    case 'UPDATE_POST':
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing,
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;
