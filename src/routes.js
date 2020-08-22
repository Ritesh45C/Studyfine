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
// import Selfanalysistest from "views/selfTest.jsx";
// import UserPage from "views/User.jsx";
import Dashboard from "views/StudentView/Dashboard";
import Diary from "views/StudentView/Diary/Diary";
import Recommendation from "views/StudentView/Recommendation/Recommendation";
import Selfanalysistest from "views/StudentView/SelfAnalysisTest/selfTest";
import Report from "views/StudentView/Report/Report";
import Tables from "views/Common/Tables";
import User from "views/StudentView/PersonalDevelopment/User";

// import UpgradeToPro from "views/Upgrade.jsx";

//Student
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/student"
  },
  {
    path: "/tables",
    name: "Table Table",
    icon: "nc-icon nc-tile-56",
    component: Tables,
    layout: "/student"
  },

  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-diamond",
    component: Diary,
    layout: "/student"
  },
  {
    path: "/Recommendation",
    name: "Recomendation",
    icon: "nc-icon nc-pin-3",
    component: Recommendation,
    layout: "/student"
  },
  {
    path: "/selfTest",
    name: "Self Analysis Test",
    icon: "nc-icon nc-bell-55",
    component: Selfanalysistest,
    layout: "/student"
  },
  {
    path: "/user-page",
    name: "Personal Development",
    icon: "nc-icon nc-single-02",
    component: User,
    layout: "/student"
  },
  {
    path: "/report",
    name: "Report",
    icon: "nc-icon nc-single-02",
    component: Report,
    layout: "/student"
  }

  // Old Code
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];
export default routes;
