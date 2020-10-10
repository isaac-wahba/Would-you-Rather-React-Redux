import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import LoginPage from "./components/LoginPage";
import NavigationBar from "./components/NavigationBar";
import { handleInitialData } from "./redux/shared";
import Routes from "./routes";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authenticated, loading } = this.props;

    return (
      <Router>
        <>
          <LoadingBar />
          <div className="container">
            <NavigationBar />
            {loading ? null : !authenticated ? <LoginPage /> : <Routes />}
          </div>
        </>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authenticated: (authedUser !== "") & (authedUser !== null),
  };
}

export default connect(mapStateToProps)(App);
