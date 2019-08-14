import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
  
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    }
    console.log(data);
    this.props.dispatch({
      type: 'UPDATE_POST',
      id: this.props.post.id,
      data
    });

    this.getTitle.value = '';
    this.getMessage.value = '';
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleEdit}>
        <input required placeholder="Enter Post Title" defaultValue={this.props.post.title} ref={(input) => this.getTitle = input} />
        <br/>
        <br/>
          <textarea required type="text" rows="5" cols="28" defaultValue={this.props.post.message} placeholder="Enter Post" ref={(input => this.getMessage = input)} />
        <br/>
        <br/>
        <button>Update Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);