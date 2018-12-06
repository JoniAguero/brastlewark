import * as user from '../actions/user.actions';
import { User } from 'src/app/utils/models/User.model';

export interface State {
    user: User;
}

const initialState: State = {
    user: undefined
};
export function UserReducer(state = initialState, action: user.actions): State {
    switch (action.type) {
        case user.LOGIN_USER:
            return {
                user: action.user
            };
        case user.LOGOUT_USER:
            return {
                user: undefined
            };
        default:
            return state;
    }
}
