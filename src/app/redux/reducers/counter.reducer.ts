import * as counterActions from '../actions/counter.action';

export interface State {
    counter: number;
}
const initialState: State = {
    counter: 20
};
export function CounterReducer(state = initialState, action: counterActions.actions): State {
    switch (action.type) {
        case counterActions.SET_COUNTER:
            return {
                counter: state.counter + action.counter
            };
        case counterActions.UNSET_COUNTER:
            return {
                counter: 20
            };
        default:
            return state;
    }
}
