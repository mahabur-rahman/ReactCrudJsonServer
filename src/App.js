import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom scss
import "./global.scss";
// react router
import { Switch, Route, Redirect } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// comp
import Header from "./components/Header";
import Create from "./components/Crud/Create";
import EditUser from "./components/Crud/Edit";
import UserView from "./components/Crud/View";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/create" component={Create} />
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route exact path="/user/view/:id" component={UserView} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
