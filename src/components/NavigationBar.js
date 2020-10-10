import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthentecatedUser } from "../redux/auth/actions";

class NavigationBar extends Component {
  logOut = (e) => {
    this.props.dispatch(setAuthentecatedUser(""));
  };

  render() {
    const { user, authenticated } = this.props;

    const links = [
      { title: "Home", path: "/" },
      { title: " New Question", path: "/add" },
      { title: "Leader Board", path: "/leaderboard" },
    ];

    return (
      <nav className="nav">
        {authenticated ? (
          <div>
            <img
              src={user.avatarURL}
              style={{ width: 30, height: 30 }}
              alt={user.name}
            />
            <span>Hello {user.name}</span>
          </div>
        ) : (
          <p>You are not logged in</p>
        )}
        <ul className="links-list">
          {links.map((link) => (
            <li key={link.path} className="links-list-item">
              <NavLink to={link.path} exact activeClassName="active">
                {link.title}
              </NavLink>
            </li>
          ))}

          {authenticated ? (
            <li onClick={this.logOut} className="align-right">
              <button className="sign-out">Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user,
    authenticated: (authedUser !== "") & (authedUser !== null),
  };
}

export default connect(mapStateToProps)(NavigationBar);
