import * as gnomesActions from '../actions/gnomes.actions';
import { Gnome } from '../../models/Gnome.model';

export interface State {
    gnomes: Gnome[];
    gnomesView: Gnome[];
}
const initialState: State = {
    gnomes: [],
    gnomesView: []
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
                ]
            };
        case gnomesActions.SET_GNOMES_VIEW:
            return {
                gnomes: [...state.gnomes],
                gnomesView: [
                    ...state.gnomes.splice(0, action.payload).map(item => {
                        return { ...item };
                    })
                ]
            };
        case gnomesActions.UNSET_GNOMES:
            return {
                gnomesView: [],
                gnomes: []
            };
        default:
            return state;
    }
}
