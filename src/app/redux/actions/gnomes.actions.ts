import { Action } from '@ngrx/store';

import { Gnome} from '../../utils/models/Gnome.model';

export const SET_GNOMES = '[SET GNOMES] Set ...';
export const UNSET_GNOMES = '[UNSET GNOMES] Unset ...';

export const SET_GNOME_SELECTED = '[SET GNOME SELECTED] Set ...';
export const UNSET_GNOME_SELECTED = '[UNSET GNOME SELECTED] Unset ...';

export class SetGnomes implements Action {
    readonly type = SET_GNOMES;
    constructor(public gnomes: Gnome[]) { }
}

export class UnsetGnomes implements Action {
    readonly type = UNSET_GNOMES;
}

export class SetGnomeSelected implements Action {
    readonly type = SET_GNOME_SELECTED;
    constructor(public gnomeSelected: Gnome) { }
}

export class UnsetGnomeSelected implements Action {
    readonly type = UNSET_GNOME_SELECTED;
}

export type actions =
    SetGnomes |
    UnsetGnomes |
    SetGnomeSelected |
    UnsetGnomeSelected;
