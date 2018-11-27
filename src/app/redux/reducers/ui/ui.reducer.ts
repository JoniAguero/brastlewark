import * as UI from '../../actions/ui.actions';

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false
};
export function UIReducer(state = initialState, action: UI.actions): State {
    switch (action.type) {
        case UI.LOADING:
            return {
                isLoading: true
            };
        case UI.NOT_LOADING:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}
