import { LOGIN } from './type';
import http from '../../services/httpService';

export const onLogin = () => {
    return async dispatch => {
        await http.post('/login', )
            .then(res => {
                dispatch({
                    type: LOGIN,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
}