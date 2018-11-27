import * as gnomesActions from '../actions/gnomes.actions';
import { Gnome } from '../../models/Gnome.model';
export interface State {
    gnomes: Gnome[];
}
const initialState: State = {
    gnomes: []
};
export function GnomesReducer(state = initialState, action: gnomesActions.actions): State {
    switch (action.type) {
        case gnomesActions.SET_GNOMES:
            return {
                gnomes: {
                    ...action.gnomes.map(item => {
                        return { ...item };
                    })
                }
            };
        case gnomesActions.UNSET_GNOMES:
            return {
                gnomes: []
            };
        default:
            return state;
    }
}
