import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../../redux/shared";

class AddNewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  optionOneChanged = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne,
    }));
  };

  optionTwoChanged = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Would You Rather?</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="option-new"
            placeholder="Option One"
            value={optionOne}
            name="optionOne"
            onChange={this.optionOneChanged}
          />
          <textarea
            className="option-new"
            placeholder="Option Two"
            value={optionTwo}
            name="optionTwo"
            onChange={this.optionTwoChanged}
          />
          <button
            className="create-btn"
            type="submit"
            disabled={!optionOne || !optionTwo}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddNewQuestion);
