import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionView from "./Questions/QuestionView";
import {
  answeredQuestionSelector,
  unansweredQuestionSelector,
} from "../utils/helpers";

class HomePage extends Component {
  state = {
    showAnswered: false,
  };

  showAnswered = (e) => {
    this.setState(() => ({
      showAnswered: true,
    }));
  };

  showUnanswered = (e) => {
    this.setState(() => ({
      showAnswered: false,
    }));
  };

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    const { showAnswered } = this.state;
    const questions = showAnswered ? answeredQuestions : unansweredQuestions;
    return (
      <div>
        <div className="centerd-content">
          <button
            className="question-group"
            onClick={this.showAnswered}
            disabled={this.state.showAnswered}
          >
            Show Answered
          </button>
          <button
            className="question-group"
            onClick={this.showUnanswered}
            disabled={!this.state.showAnswered}
          >
            Show Unanswered
          </button>
        </div>
        {questions.map((q) => (
          <QuestionView key={q} id={q} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: answeredQuestionSelector(state),
    unansweredQuestions: unansweredQuestionSelector(state),
  };
}

export default connect(mapStateToProps)(HomePage);
