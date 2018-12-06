import * as gnomesActions from '../actions/gnomes.actions';
import { Gnome } from '../../utils/models/Gnome.model';
import { AppState } from '../app.reducer';
import { GnomeState } from './gnomes.reducer';

export interface State {
    gnomes: Gnome[];
    gnomesView: Gnome[];
    gnomeSelected: Gnome;
}

export interface GnomeState extends AppState {
    gnomes: State;
}

const initialState: State = {
    gnomes: [],
    gnomesView: [],
    gnomeSelected: undefined
};
export function GnomesReducer(state = initialState, action: gnomesActions.actions): State {
    switch (action.type) {
        case gnomesActions.SET_GNOMES_ALL:
            return {
                gnomes: [
                    ...action.gnomes.map(item => {
                        return { ...item };
                    })
                ],
                gnomesView: [
                    ...state.gnomesView
                ],
                gnomeSelected: state.gnomeSelected
            };
        case gnomesActions.SET_GNOMES_VIEW:
            return {
                gnomes: [...state.gnomes],
                gnomesView: [
                    ...state.gnomes.splice(0, action.payload).map(item => {
                        return { ...item };
                    })
                ],
                gnomeSelected: state.gnomeSelected
            };
        case gnomesActions.UNSET_GNOMES:
            return {
                gnomesView: [],
                gnomes: [],
                gnomeSelected: state.gnomeSelected
            };
        case  gnomesActions.SET_GNOME_SELECTED:
            return {
                gnomes: [...state.gnomes],
                gnomesView: [...state.gnomesView],
                gnomeSelected: action.gnomeSelected
            };
        case gnomesActions.UNSET_GNOME_SELECTED:
            return {
                gnomes: [...state.gnomes],
                gnomesView: [...state.gnomesView],
                gnomeSelected: undefined
            };
        default:
            return state;
    }
}
