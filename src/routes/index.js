import { MENU } from "../config/menu";
import VueRouter from "vue-router";
import { CONFIG_COOKIES } from "../config/cookies";
import { getCookies } from "../utils/cookies";

import {AUTH_ROUTES} from "./auth"
import {DASHBOARD_ROUTES} from "./dashboard"

const routes = [
    ...AUTH_ROUTES,
    ...DASHBOARD_ROUTES
];

const router = new VueRouter({routes});
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !getCookies(CONFIG_COOKIES.TOKEN)) {
        next(MENU.LOGIN);
    }else{
        next();
    }
})

export default router;