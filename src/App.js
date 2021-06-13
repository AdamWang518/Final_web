import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/Gallery" component={Gallery} />
      </div>
    );
  }
}
export default App;
