/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";
import SchoolExecutive from "layoutSchoolExecutive/SchoolExecutive";

import TeacherLayout from "layoutTeacher/Teacher";
import PrincipalLayout from "layoutPrincipal/Prinicipal.jsx";
import ExecutiveLayout from "layoutExecutive/Executive";
import ParentsLayout from "layoutParents/Parents";
import Login from "./views/Auth/Login";
import Forgetpwd from "./views/Auth/Frogetpwd";
import ChooseChild from "views/ParentView/ChooseChild";
import SketchExample from "Canvas";
import ShoppingCart from "views/ParentView/DiscoveryPlatform/ShoppingCart";
import AdminsLayout from "layoutAdmin/Admin";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/parents" exact component={ChooseChild} />

      <Route path="/student" render={(props) => <AdminLayout {...props} />} />
      <Route path="/teacher" render={(props) => <TeacherLayout {...props} />} />
      <Route
        path="/principal"
        render={(props) => <PrincipalLayout {...props} />}
      />
      <Route
        exact
        path="/executive/discovery-platform/cart"
        component={ShoppingCart}
      />

      <Route path="/parents" render={(props) => <ParentsLayout {...props} />} />
      <Route
        path="/executive"
        render={(props) => <ExecutiveLayout {...props} />}
      />
      <Route path="/admin" render={(props) => <AdminsLayout {...props} />} />
      <Route
        path="/school-executive"
        render={(props) => <SchoolExecutive {...props} />}
      />

      {/* <Route path="/teacher" render={props=> <UserPage {...props}/>}/> */}
      {/* <Redirect to="/admin/dashboard" /> */}

      <Route path="/canvas" exact component={SketchExample} />

      <Route path="/forget" exact component={Forgetpwd} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
