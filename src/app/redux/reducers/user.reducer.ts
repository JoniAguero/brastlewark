import * as user from '../actions/user.actions';

export interface State {
    user: string;
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
