import Dashboard from "views/PrincipalView/Dashboard";
import LiveTrack from "views/PrincipalView/LiveTrack";
import TimeTable from "views/PrincipalView/TimeTable";
import CreateQues from "views/PrincipalView/CreateQues";
import Principallivetest from "views/PrincipalView/LiveTest";
import Syllabus from "views/PrincipalView/syllabusIndicator";
import Userprofile from "views/PrincipalView/Userprofile";
import Register from "views/Executive/Dashboard";

var routePrincipal = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/principal",
  },
  {
    path: "/LiveTrack",
    name: "Live Tracking",
    icon: "nc-icon nc-bank",
    component: LiveTrack,
    layout: "/principal",
  },
  {
    path: "/TimeTable",
    name: "Time Table",
    icon: "nc-icon nc-bank",
    component: TimeTable,
    layout: "/principal",
  },
  {
    path: "/CreateQues",
    name: "Create Our Question",
    icon: "nc-icon nc-bank",
    component: CreateQues,
    layout: "/principal",
  },
  {
    path: "/livetest",
    name: "Live Test",
    icon: "nc-icon nc-bank",
    component: Principallivetest,
    layout: "/principal",
  },
  {
    path: "/Syllabus",
    name: "Syllabus",
    icon: "nc-icon nc-bank",
    component: Syllabus,
    layout: "/principal",
  },
  {
    path: "/user-profile",
    name: "User-Profile",
    icon: "nc-icon nc-bank",
    component: Userprofile,
    layout: "/principal",
  },
];

export default routePrincipal;
