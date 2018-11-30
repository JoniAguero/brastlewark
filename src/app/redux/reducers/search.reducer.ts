import * as searchAction from '../actions/search.action';

export interface State {
    search: string;
}

const initialState: State = {
    search: ''
};
export function SearchReducer(state = initialState, action: searchAction.actions): State {
    switch (action.type) {
        case searchAction.SET_SEARCH:
            return {
                search: action.search
            };
        case searchAction.UNSET_SEARCH:
            return {
                search: ''
            };
        default:
            return state;
    }
}

