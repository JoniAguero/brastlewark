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
        if (action.payload === 0) {
            return {
                ...state,
                gnomesView: [
                    ...action.gnomes.splice(action.payload, action.payload + 20).map(item => {
                        return { ...item };
                    })
                ]
            };
        } else {
            return {
                ...state,
                gnomesView: [
                    ...action.gnomes.splice(action.payload, action.payload).map(item => {
                        return { ...item };
                    })
                ]
            };
        }
        case gnomesActions.UNSET_GNOMES:
            return {
                gnomesView: [],
                gnomes: []
            };
        default:
            return state;
    }
}
