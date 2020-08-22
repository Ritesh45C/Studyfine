import Register from "views/Executive/Dashboard";
import Data from "views/Executive/Data/Data";
import RegisterForm from "views/Executive/RegisterForm/Register";
import DiaryData from "views/Executive/Diary/DiaryData";
import ChatData from "views/Executive/Chat/ChatData";

var routeSchoolExecutive = [
  // {
  //   path: "/",
  //   component: ChooseChild,
  //   exact: "true",
  //   layout: "/executive",
  // },

  {
    path: "/manage-data",
    name: "Manage Data",
    icon: "nc-icon nc-paper",
    component: Data,
    layout: "/school-executive",
  },
  {
    path: "/Fee Data",
    name: "Fee data",
    icon: "nc-icon nc-credit-card",
    component: Data,
    layout: "/school-executive",
  },
  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-diamond",
    component: DiaryData,
    layout: "/school-executive",
  },
  {
    path: "/school-chat",
    name: "School Chat",
    icon: "nc-icon nc-chat-33",
    component: ChatData,
    layout: "/school-executive",
  },

  {
    path: "/cab-data",
    name: "Cab Data",
    icon: "nc-icon nc-compass-05",
    component: Data,
    layout: "/school-executive",
  },
];
export default routeSchoolExecutive;
