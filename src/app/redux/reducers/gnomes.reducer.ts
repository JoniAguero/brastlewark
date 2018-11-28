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
                ...state,
                gnomes: [
                    ...action.gnomes.map(item => {
                        return { ...item };
                    })
                ]
            };
        case gnomesActions.SET_GNOMES_VIEW:
            return {
                ...state,
                gnomesView: [
                    ...action.gnomes.splice(0, action.payload).map(item => {
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
