import Data from "views/Executive/Data/Data";
import RegisterForm from "views/Executive/RegisterForm/Register";
import DiaryData from "views/Executive/Diary/DiaryData";
import ChatData from "views/Executive/Chat/ChatData";
import Register from "views/AdminView/Dashboard";
import SchoolRegister from "views/AdminView/SchoolRegister/SchoolRegister";
import ManageExecutive from "views/AdminView/ManageExecutive/ManageExecutive";

var routeAdmin = [
  // {
  //   path: "/",
  //   component: ChooseChild,
  //   exact: "true",
  //   layout: "/executive",
  // },
  {
    path: "/school-register",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    invisible: true,
    component: SchoolRegister,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Register,
    layout: "/admin",
  },
  {
    path: "/manage-executive",
    name: "Manage Executive",
    icon: "nc-icon nc-single-02",
    component: ManageExecutive,
    layout: "/admin",
  },
  {
    path: "/manage-data",
    name: "Manage Data",
    icon: "nc-icon nc-paper",
    component: Data,
    layout: "/admin",
  },
  {
    path: "/tablet-data",
    name: "Tab Data",
    icon: "nc-icon nc-tablet-2",
    component: Data,
    layout: "/admin",
  },
  {
    path: "/Fee Data",
    name: "Fee data",
    icon: "nc-icon nc-credit-card",
    component: Data,
    layout: "/admin",
  },
  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-diamond",
    component: DiaryData,
    layout: "/admin",
  },
  {
    path: "/school-chat",
    name: "School Chat",
    icon: "nc-icon nc-chat-33",
    component: ChatData,
    layout: "/admin",
  },
  {
    path: "/shop-Data",
    name: "Shop Data",
    icon: "nc-icon nc-money-coins",
    component: Data,
    layout: "/admin",
  },
  {
    path: "/cab-data",
    name: "Cab Data",
    icon: "nc-icon nc-compass-05",
    component: Data,
    layout: "/admin",
  },
];
export default routeAdmin;
