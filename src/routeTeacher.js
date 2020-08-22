// Teacher View
import Dashboardteacher from "./views/TeacherView/Dashboard";
import LiveTest from "./views/TeacherView/LiveTest";
// import UserPage from "views/User.jsx";
import Createpaper from "./views/TeacherView/CreatePaper";
import Livetracking from "./views/TeacherView/LiveTracking";
import Homework from "./views/TeacherView/HomeWork";
import Diary from "views/StudentView/Diary/Diary";
import Tables from "views/Common/Tables";
import User from "views/Common/Userprofile";
//Teacher
var TeacherRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboardteacher,
    layout: "/teacher",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: User,
    layout: "/teacher",
  },
  {
    path: "/tables",
    name: "Table Table",
    icon: "nc-icon nc-tile-56",
    component: Tables,
    layout: "/teacher",
  },

  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-bank",
    component: Diary,
    layout: "/teacher",
  },
  {
    path: "/liveTest",
    name: "Live Test",
    icon: "nc-icon nc-bank",
    component: LiveTest,
    layout: "/teacher",
  },
  {
    path: "/Createpaper",
    name: "Create Our Paper",
    icon: "nc-icon nc-bank",
    component: Createpaper,
    layout: "/teacher",
  },
  {
    path: "/Livetracking",
    name: "Live Tracking",
    icon: "nc-icon nc-bank",
    component: Livetracking,
    layout: "/teacher",
  },
  {
    path: "/home-work",
    name: "Home Work",
    icon: "nc-icon nc-bank",
    component: Homework,
    layout: "/teacher",
  },
];

export default TeacherRoutes;
