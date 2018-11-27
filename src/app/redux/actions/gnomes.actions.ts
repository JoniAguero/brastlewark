import { Action } from '@ngrx/store';

import { Gnome} from '../../models/Gnome.model';

export const SET_GNOMES = '[SET GNOMES] Set ...';
export const UNSET_GNOMES = '[UNSET GNOMES] Unset ...';

export class SetGomes implements Action {
    readonly type = SET_GNOMES;
    constructor(public gnomes: Gnome[]) { }
}
export class UnsetGomes implements Action {
    readonly type = UNSET_GNOMES;
}
export type actions = SetGomes |
    UnsetGomes;
