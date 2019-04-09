import React, { Component } from "react";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { id: 1, author: "Louise", text:"I love cheese!"},
        { id: 2, author: "Colin", text: "Is it hometime?!"}
      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(comment){
    comment.id = Date.now()
    const updatedComments = [...this.state.data, comment]
    this.setState({ data: updatedComments })
  }

  render(){
    return (
      <div className="comment-box">
        <h2>Add a Comment</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <h2>Comments List</h2>
        <CommentsList data={this.state.data}/>
      </div>
    )
  }

}

export default CommentBox;
