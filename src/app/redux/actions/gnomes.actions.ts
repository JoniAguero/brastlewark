import { Action } from '@ngrx/store';

import { Gnome} from '../../utils/models/Gnome.model';

export const SET_GNOMES_ALL = '[SET GNOMES ALL] Set ...';
export const SET_GNOMES_VIEW = '[SET GNOMES VIEW] Set ...';
export const UNSET_GNOMES = '[UNSET GNOMES] Unset ...';

export class SetGnomes implements Action {
    readonly type = SET_GNOMES_ALL;
    constructor(public gnomes: Gnome[]) { }
}

export class SetGnomesView implements Action {
    readonly type = SET_GNOMES_VIEW;
    constructor(public payload: number) {}
}

export class UnsetGnomes implements Action {
    readonly type = UNSET_GNOMES;
}
export type actions = SetGnomes |
    SetGnomesView |
    UnsetGnomes;
