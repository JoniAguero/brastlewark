import { Action } from '@ngrx/store';

import { Gnome} from '../../utils/models/Gnome.model';

export const LOAD_GNOMES_ALL = '[LOAD GNOMES ALL] LOAD ...';
export const SET_GNOMES_ALL_SUCCESS = '[SET GNOMES ALL SUCCESS] Set SUCCESS...';
export const SET_GNOMES_VIEW_SUCCESS = '[SET GNOMES VIEW] Set ...';
export const UNSET_GNOMES = '[UNSET GNOMES] Unset ...';

export const SET_GNOME_SELECTED = '[SET GNOME SELECTED] Set ...';
export const UNSET_GNOME_SELECTED = '[UNSET GNOME SELECTED] Unset ...';

export class LoadGnomes implements Action {
    readonly type = LOAD_GNOMES_ALL;
    constructor() { }
}

export class SetGnomesAll implements Action {
    readonly type = SET_GNOMES_ALL_SUCCESS;
    constructor(public gnomes: Gnome[]) { }
}

export class SetGnomesView implements Action {
    readonly type = SET_GNOMES_VIEW_SUCCESS;
    constructor(public payload: number) {}
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
    LoadGnomes |
    SetGnomesAll |
    SetGnomesView |
    UnsetGnomes |
    SetGnomeSelected |
    UnsetGnomeSelected;
