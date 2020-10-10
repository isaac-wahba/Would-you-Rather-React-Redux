import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class QuestionView extends Component {
  state = {
    redirect: false,
  };

  handleClick = (e) => {
    e.preventDefault();

    this.setState(() => ({
      redirect: true,
    }));
  };

  render() {
    const { question, author } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`/questions/${question.id}`} />;
    }

    return (
      <div className="question-overview" onClick={this.handleClick}>
        <img
          className="centerd-content"
          src={author.avatarURL}
          style={{ width: 100, height: 100 }}
          alt={author.name}
        />
        <p className="center">{author.name} asks:</p>
        <p className="center">Would You Rather?</p>
        <div className="option">
          <p>{question.optionOne.text}</p>
        </div>
        <div className="option">
          <p>{question.optionTwo.text}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    author,
    question,
  };
}

export default connect(mapStateToProps)(QuestionView);
