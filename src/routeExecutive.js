import Register from "views/Executive/Dashboard";
import Data from "views/Executive/Data/Data";
import RegisterForm from "views/Executive/RegisterForm/Register";
import DiaryData from "views/Executive/Diary/DiaryData";
import ChatData from "views/Executive/Chat/ChatData";

var routeExecutive = [
  // {
  //   path: "/",
  //   component: ChooseChild,
  //   exact: "true",
  //   layout: "/executive",
  // },
  {
    path: "/register",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    invisible: true,
    component: RegisterForm,
    layout: "/executive",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Register,
    layout: "/executive",
  },
  {
    path: "/manage-data",
    name: "Manage Data",
    icon: "nc-icon nc-paper",
    component: Data,
    layout: "/executive",
  },
  {
    path: "/Fee Data",
    name: "Fee data",
    icon: "nc-icon nc-credit-card",
    component: Data,
    layout: "/executive",
  },
  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-diamond",
    component: DiaryData,
    layout: "/executive",
  },
  {
    path: "/school-chat",
    name: "School Chat",
    icon: "nc-icon nc-chat-33",
    component: ChatData,
    layout: "/executive",
  },
  {
    path: "/shop-Data",
    name: "Shop Data",
    icon: "nc-icon nc-money-coins",
    component: Data,
    layout: "/executive",
  },
  {
    path: "/cab-data",
    name: "Cab Data",
    icon: "nc-icon nc-compass-05",
    component: Data,
    layout: "/executive",
  },
];
export default routeExecutive;
