import * as counterActions from '../actions/counter.action';

export interface State {
    counter: number;
}
const initialState: State = {
    counter: 0
};
export function CounterReducer(state = initialState, action: counterActions.actions): State {
    switch (action.type) {
        case counterActions.SET_COUNTER:
            return {
                counter: action.counter
            };
        case counterActions.UNSET_COUNTER:
            return {
                counter: 0
            };
        default:
            return state;
    }
}
