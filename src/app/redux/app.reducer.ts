import { ActionReducerMap } from '@ngrx/store';
import * as UI from './reducers/ui/ui.reducer';

export interface AppState {
    ui: UI.State;
}
export const AppReducer: ActionReducerMap<AppState> = {
    ui: UI.UIReducer
};

