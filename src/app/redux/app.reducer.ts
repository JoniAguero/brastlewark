import { ActionReducerMap } from '@ngrx/store';

import * as UI from './reducers/ui.reducer';
import * as Gnomes from './reducers/gnomes.reducer';

export interface AppState {
    ui: UI.State;
    gnomes: Gnomes.State;
}
export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer,
    gnomes: Gnomes.GnomesReducer
};

