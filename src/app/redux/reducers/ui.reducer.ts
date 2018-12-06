import * as ui from '../actions/ui.actions';

export interface State {
    loading: boolean;
}

const initialState: State = {
    loading: false
};
export function UiReducer(state = initialState, action: ui.actions): State {
    switch (action.type) {
        case ui.SET_LOADING:
            return {
                loading: true
            };
        case ui.UNSET_LOADING:
            return {
                loading: false
            };
        default:
            return state;
    }
}
