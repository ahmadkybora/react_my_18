import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Home from "../components/panel/layouts/home";
import Users from "../components/panel/users";

export const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/panel/users', component: Users },
]