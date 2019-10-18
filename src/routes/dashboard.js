import { MENU } from "../config/menu";
import Dashboard from "../components/Dashboard.vue";

export const DASHBOARD_ROUTES = [
  {
    path: MENU.DASHBOARD,
    component: Dashboard,
    meta: {
      auth: true
    },
  }
];