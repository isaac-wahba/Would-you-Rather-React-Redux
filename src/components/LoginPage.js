import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { setAuthentecatedUser } from "../redux/auth/actions";

class LoginPage extends Component {
  selectUser = (e) => {
    this.props.dispatch(setAuthentecatedUser(e.value));
  };

  render() {
    const options = this.props.users.map((user) => {
      return {
        value: user.id,
        label: user.name,
      };
    });

    return (
      <div className="login">
        <p className="center">Login</p>
        <Dropdown
          className="center"
          options={options}
          placeholder="Who are you?"
          onChange={this.selectUser}
        />
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(LoginPage);
