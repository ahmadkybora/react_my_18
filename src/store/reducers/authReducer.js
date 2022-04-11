import { LOGIN } from '../actions/type';

const initialState = {
    user: [],
}

export default function(state = initialState, action) {
    switch (action.type) {

        case LOGIN:
            {
                return {
                    ...state,
                    users: action.payload,
                }
            }

        default:
            return state
    }
};