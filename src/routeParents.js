import Dashboard from "./views/ParentView/Dashboard";
import LiveTrack from "views/PrincipalView/LiveTrack";
import ChooseChild from "views/ParentView/ChooseChild";
import Diary from "views/StudentView/Diary/Diary";
import ChatIcon from "@material-ui/icons/Chat";
import PayFee from "views/ParentView/PayFee/PayFee";
import Chat from "views/ParentView/School Chat/Chat";
import DiscoverPlatform from "views/ParentView/DiscoveryPlatform/DiscoverPlatform";
import SecureCab from "views/ParentView/SecureCab/SecureCab";
import ShoppingCart from "views/ParentView/DiscoveryPlatform/ShoppingCart";
import DeliveryCheckout from "views/ParentView/DiscoveryPlatform/DeliveryCheckout/DeliveryCheckout";

var routeParents = [
  // {
  //   path: "/",
  //   component: ChooseChild,
  //   exact: "true",
  //   layout: "/parents",
  // },
  {
    path: "/cart",
    name: "cart",
    invisible: true,
    component: ShoppingCart,
    layout: "/parents",
  },
  {
    path: "/checkout",
    name: "checkout",
    invisible: true,
    component: DeliveryCheckout,
    layout: "/parents",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/parents",
  },
  {
    path: "/LiveTrack",
    name: "Live Tracking",
    icon: "nc-icon nc-pin-3",
    component: LiveTrack,
    layout: "/parents",
  },
  {
    path: "/pay-fee",
    name: "Pay Fee",
    icon: "nc-icon nc-credit-card",
    component: PayFee,
    layout: "/parents",
  },
  {
    path: "/diary",
    name: "Diary",
    icon: "nc-icon nc-diamond",
    component: Diary,
    layout: "/parents",
  },
  {
    path: "/school-chat",
    name: "School Chat",
    icon: "nc-icon nc-chat-33",
    component: Chat,
    layout: "/parents",
  },
  {
    path: "/discovery-platform",
    name: "Discover",
    icon: "nc-icon nc-planet",
    component: DiscoverPlatform,
    layout: "/parents",
  },
  {
    path: "/secure-cab",
    name: "Secure Cab",
    icon: "nc-icon nc-compass-05",
    component: SecureCab,
    layout: "/parents",
  },
];
export default routeParents;
