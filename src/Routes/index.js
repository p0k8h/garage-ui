import React from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import SignUp from "../modules/signup";
import Login from "../modules/login";
// import Home from "../modules/Home";
import Customer from "../modules/customer";
import Stock from "../modules/stock";
import Order from "../modules/order";
import Employee from "../modules/employee";
// import Supplier from "../modules/supplier";
import EditEmployee from "../modules/employee/editEmployee";
import Invoice from "../modules/invoice";
import Job from "../modules/job";
import About from "../modules/module1/about";
import Car from "../modules/module1/carMechanics";
import Home from "../modules/module1/Home";
import Service from "../modules/module1/service";
import Brands from "../modules/module1/brands";
import Testimonials from "../modules/module1/testtimonials";
import Contact from "../modules/module1/contact";
import Book from "../modules/module1/Book";

const checkAuth = () => {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  )
}

export default function Routes() {
  return (

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <SignUp />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/car" component={Car} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/brands" component={Brands} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/book" component={Book} />
      <Route exact path="/login" component={withRouter(Login)} />
      <AuthRoute exact path="/customers" component={withRouter(Customer)} />

      <AuthRoute exact path="/stocks" component={withRouter(Stock)} />
      <AuthRoute exact path="/orders" component={withRouter(Order)} />
      <AuthRoute exact path="/employees" component={withRouter(Employee)} />
      <AuthRoute exact path="/editEmployee" component={withRouter(EditEmployee)} />
      {/* <AuthRoute exact path="/suppliers" component={withRouter(Supplier)} /> */}
      <AuthRoute exact path="/invoice" component={withRouter(Invoice)} />
      <AuthRoute exact path="/jobs" component={withRouter(Job)} />
    </Switch>
  );
}
