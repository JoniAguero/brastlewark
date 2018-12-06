import { ActionReducerMap } from '@ngrx/store';

import * as User from './reducers/user.reducer';
import * as Gnomes from './reducers/gnomes.reducer';
import * as Counter from './reducers/counter.reducer';
import * as Search from './reducers/search.reducer';

export interface AppState {
    user: User.State;
    gnomes: Gnomes.State;
    counter: Counter.State;
    search: Search.State;
}
export const AppReducer: ActionReducerMap<AppState> = {
    user: User.UserReducer,
    gnomes: Gnomes.GnomesReducer,
    counter: Counter.CounterReducer,
    search: Search.SearchReducer
};

