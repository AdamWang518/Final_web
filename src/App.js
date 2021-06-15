import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Main from "./components/Main";
import Calendar from "./components/Calendar";
import ReactGa from "react-ga";
function App() {
  useEffect(() => {
    ReactGa.initialize("UA-193353572-2");
    ReactGa.pageview("/");
    ReactGa.pageview("/Main");
    ReactGa.pageview("/Login");
    ReactGa.pageview("/SignUp");
    ReactGa.pageview("/TodoList");
    ReactGa.pageview("/Calendar");
  }, []);
  useEffect(() => {
    console.log(window.location.pathname + window.location.search);
  });
  return (
    <div className="container">
      <Route path="/" exact component={Login} />
      <Route path="/Main" component={Main} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/TodoList" component={TodoList} />
      <Route path="/Calendar" component={Calendar} />
    </div>
  );
}
export default App;
