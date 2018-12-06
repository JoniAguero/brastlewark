import { ActionReducerMap } from '@ngrx/store';

import * as Ui from './reducers/ui.reducer';
import * as User from './reducers/user.reducer';
import * as Counter from './reducers/counter.reducer';
import * as Search from './reducers/search.reducer';

export interface AppState {
    ui: Ui.State;
    user: User.State;
    counter: Counter.State;
    search: Search.State;
}
export const AppReducer: ActionReducerMap<AppState> = {
    ui: Ui.UiReducer,
    user: User.UserReducer,
    counter: Counter.CounterReducer,
    search: Search.SearchReducer
};

