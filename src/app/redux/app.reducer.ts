import { ActionReducerMap } from '@ngrx/store';

import * as UI from './reducers/ui.reducer';
import * as Gnomes from './reducers/gnomes.reducer';
import * as Counter from './reducers/counter.reducer';
import * as Search from './reducers/search.reducer';

export interface AppState {
    ui: UI.State;
    gnomes: Gnomes.State;
    counter: Counter.State;
    Search: Search.State;
}
export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer,
    gnomes: Gnomes.GnomesReducer,
    counter: Counter.CounterReducer,
    Search: Search.SearchReducer
};

