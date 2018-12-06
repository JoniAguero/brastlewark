import * as gnomesActions from '../actions/gnomes.actions';
import { Gnome } from '../../utils/models/Gnome.model';
import { AppState } from '../app.reducer';
import { GnomeState } from './gnomes.reducer';

export interface State {
    gnomes: Gnome[];
    gnomeSelected: Gnome;
}

export interface GnomeState extends AppState {
    gnomes: State;
}

const initialState: State = {
    gnomes: [],
    gnomeSelected: undefined
};
export function GnomesReducer(state = initialState, action: gnomesActions.actions): State {
    switch (action.type) {
        case gnomesActions.SET_GNOMES:
            return {
                gnomes: [
                    ...action.gnomes.map(item => {
                        return { ...item };
                    })
                ],
                gnomeSelected: state.gnomeSelected
            };
        case gnomesActions.UNSET_GNOMES:
            return {
                gnomes: [],
                gnomeSelected: state.gnomeSelected
            };
        case  gnomesActions.SET_GNOME_SELECTED:
            return {
                gnomes: [...state.gnomes],
                gnomeSelected: action.gnomeSelected
            };
        case gnomesActions.UNSET_GNOME_SELECTED:
            return {
                gnomes: [...state.gnomes],
                gnomeSelected: undefined
            };
        default:
            return state;
    }
}
