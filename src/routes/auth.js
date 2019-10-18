import { MENU } from '../config/menu';
import Login from '../components/users/login';
import { CONFIG_COOKIES } from "../config/cookies";
import { getCookies } from "../utils/cookies";

export const AUTH_ROUTES = [
	{ path: MENU.HOMEPAGE, component: Login },
    {
        path: MENU.LOGIN, component: Login,
        beforeEnter: (to, from, next) => {
            if (getCookies(CONFIG_COOKIES.TOKEN)) {
                next(MENU.DASHBOARD);
            }else{
                next();
            }
        }
    }
];
