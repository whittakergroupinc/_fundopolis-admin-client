import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import LoginPage from "views/Pages/LoginPage.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import TimelinePage from "views/Pages/Timeline.js";
import Raises from "views/Raises/Raises.js";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Image from "@material-ui/icons/Image";
import TrendingUp from "@material-ui/icons/TrendingUp";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PieChartIcon from "@material-ui/icons/PieChart";
import BusinessIcon from "@material-ui/icons/Business";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/raises",
    name: "Raises",
    rtlName: "الحاجيات",
    icon: TrendingUp,
    component: Raises,
    layout: "/admin"
  },
  {
    path: "/fundees",
    name: "Fundees",
    rtlName: "التقويم",
    icon: BusinessIcon,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/investors",
    name: "Investors",
    rtlName: "التقويم",
    icon: AccountBalanceIcon,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/analytics",
    name: "Analytics",
    rtlName: "التقويم",
    icon: PieChartIcon,
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "External Sites",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Auth0",
        rtlName: "عالتسعير",
        mini: "A0",
        rtlMini: "ع",
        component: PricingPage,
        layout: "/auth",
        url: "fundopolis.com"
      },
      {
        path: "/rtl-support-page",
        name: "Salesforce",
        rtlName: "صودعم رتل",
        mini: "SF",
        rtlMini: "صو",
        component: RTLSupport,
        layout: "/rtl",
        url: "fundopolis.com"
      },
      {
        path: "/timeline-page",
        name: "FundAmerica",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: TimelinePage,
        layout: "/admin",
        url: "fundopolis.com"
      },
      {
        path: "/login-page",
        name: "NetKi",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth",
        url: "fundopolis.com"
      },
      {
        path: "/login-page",
        name: "Jenkins",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth",
        url: "jenkins.fundopolis.com"
      },
      {
        path: "/login-page",
        name: "Grafana",
        rtlName: "هعذاتسجيل الدخول",
        mini: "GF",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth",
        url: "grafana.fundopolis.com"
      },
      {
        path: "/login-page",
        name: "Gery Logs",
        rtlName: "هعذاتسجيل الدخول",
        mini: "GL",
        rtlMini: "هعذا",
        component: LoginPage,
        layout: "/auth",
        url: "greylogs.fundopolis.com"
      }
    ]
  }
];
export default dashRoutes;
