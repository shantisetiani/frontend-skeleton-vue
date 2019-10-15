import { MENU } from "../config/menu";
import Login from "../components/users/login/index.vue"
import Dashboard from "../components/Dashboard.vue";

const routes = [
    { path: MENU.HOMEPAGE, component: Login },
    { path: MENU.LOGIN, component: Login },
    { path: MENU.DASHBOARD, component: Dashboard },
];

export default routes;