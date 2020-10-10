import React from "react";
import { Route, Switch } from "react-router-dom";
import AddNewQuestion from "./components/Questions/AddNewQuestion";
import HomePage from "./components/HomePage";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NotFound from "./components/NotFound";
import Question from "./components/Questions/Question";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" exact component={AddNewQuestion} />
      <Route path="/leaderboard" exact component={Leaderboard} />
      <Route path="/questions/:id" exact component={Question} />
      <Route component={NotFound} />
    </Switch>
  );
};
