import { Error, Success } from "../utils/exceptionHandler";
import http from "./httpService"

export const loginService = async(payload) => {
    return http.post("/login", payload)
        .then(res => {
            localStorage.getItem('fullName');
            localStorage.getItem('username');
            localStorage.getItem('isAdmin');
            localStorage.getItem('token');

            localStorage.setItem('fullName', res.data.data.first_name + ' ' + res.data.data.last_name);
            localStorage.setItem('username', res.data.data.username);
            localStorage.setItem('isAdmin', res.data.data.isAdmin);
            localStorage.setItem('token', res.data.data.token);

            Success(res);

            if (res.data.data.isAdmin) {
                // <Redirect to="/panel/users"/>
                // console.log()
                window.location.replace('http://localhost:3000/panel/dashboard');
            } else {
                window.location.replace("/");
            }
        })
        .catch(err => Error(err))
}

export const register = async(payload) => {
    return http.post("/register", payload)
        .then(res => Success(res))
        .catch(err => Error(err))
}

export const logout = () => {
    return http.get("/logout")
        .then(res => Success(res))
        .catch(err => Error(err))
}