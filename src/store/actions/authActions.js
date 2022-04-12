import { LOGIN } from './type';
import http from '../../services/httpService';
import { Error, Success } from '../../utils/exceptionHandler';

export const onLogin = (user) => {
    console.log(user)
    return async dispatch => {
        await http.post('http://localhost:8000/login', user)
            .then(res => {
                console.log(res)
                localStorage.getItem('fullName');
                localStorage.getItem('username');
                localStorage.getItem('isAdmin');
                localStorage.getItem('token');

                localStorage.setItem('fullName', res.data.data.first_name + ' ' + res.data.data.last_name);
                localStorage.setItem('username', res.data.data.username);
                localStorage.setItem('isAdmin', res.data.data.isAdmin);
                localStorage.setItem('token', res.data.data.token);

                Success(res);

                dispatch({
                    type: LOGIN,
                    payload: res.data.data
                })

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
}