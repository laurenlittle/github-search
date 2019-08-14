const postReducer = (state = [], action) => {

  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id); // The action comes with an id - it's the this.props.post.id of the post that was selcted. Keep the posts whose id's DONT MATCH the ID of the selected post (i.e filter out selected post)
    case 'EDIT_POST':
      return state.map((post) => post.id === action.id ? {...post, isEditing : !post.isEditing} : post) //if the ID was passed (via action.id matches a post ID, update the post.IsEditing to the opposite of what it currently is (i.e change to true if it's set to false and false if it's set to true)) otherwise just return the post
    case 'UPDATE_POST':
    return state.map((post) => post.id === action.id ? {...post, title: action.data.newTitle, message: action.data.newMessage, isEditing: !post.isEditing} : post)
    default:
      return state;
  }
}

export default postReducer;