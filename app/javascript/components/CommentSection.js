import React from "react"
import PropTypes from "prop-types"

class CommentSection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.fetchComments();
    this.interval = setInterval(() =>{
      this.fetchComments();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  fetchComments(){

    $.ajax({
      url: this.props.commentsPath,
      dataType: 'json',
      success: function (result){
        this.setState({comments: result})
      }.bind(this)
    });
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          {
            this.state.comments.map(function(comment, index){

              return <li key={index}>{comment.text}</li>
            })
          }

        </ul>
      </React.Fragment>
    );
  }
}

export default CommentSection
