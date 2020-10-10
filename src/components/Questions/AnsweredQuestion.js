import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredQuestion extends Component {
  render() {
    const { author, question, authedUser } = this.props;
    const isOptionOne = question.optionOne.votes.includes(authedUser);
    const optionOnePercentage = Math.round(
      (question.optionOne.votes.length * 100) /
        (question.optionOne.votes.length + question.optionTwo.votes.length)
    );

    return (
      <section className="question-overview">
        <img
          className="centerd-content"
          src={author.avatarURL}
          style={{ width: 100, height: 100 }}
          alt={author.name}
        />
        <p className="center">{author.name} asks:</p>
        <p className="center">Would You Rather?</p>
        <div>
          <div className="option-detailed">
            <p>{question.optionOne.text}</p>
            <p>
              Votes: {question.optionOne.votes.length} ({optionOnePercentage}
              %)
            </p>
            {isOptionOne && <p className="selected">Your answer</p>}
          </div>
          <div className="option-detailed">
            <p>{question.optionTwo.text}</p>
            <p>
              Votes: {question.optionTwo.votes.length} (
              {100 - optionOnePercentage}
              %)
            </p>
            {!isOptionOne && <p className="selected">Your answer</p>}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    authedUser,
    author,
    question,
  };
}

export default connect(mapStateToProps, {})(AnsweredQuestion);
