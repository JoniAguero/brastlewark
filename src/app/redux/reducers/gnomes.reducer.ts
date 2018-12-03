import * as gnomesActions from '../actions/gnomes.actions';
import { Gnome } from '../../utils/models/Gnome.model';

export interface State {
    gnomes: Gnome[];
    gnomesView: Gnome[];
    gnomeSelected: Gnome;
}
const initialState: State = {
    gnomes: [],
    gnomesView: [],
    gnomeSelected: undefined
};
export function GnomesReducer(state = initialState, action: gnomesActions.actions): State {
    switch (action.type) {
        case gnomesActions.SET_GNOMES_ALL_SUCCESS:
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
        case gnomesActions.SET_GNOMES_VIEW_SUCCESS:
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
        default:
            return state;
    }
}
