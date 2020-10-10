import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";
import { rankingUsers } from "../../utils/helpers";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => (
          <LeaderBoardCard key={user} id={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: rankingUsers(users),
  };
}

export default connect(mapStateToProps)(Leaderboard);
