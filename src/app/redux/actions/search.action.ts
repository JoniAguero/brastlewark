import { Action } from '@ngrx/store';

export const SET_SEARCH = '[SET SEARCH] Set ...';
export const UNSET_SEARCH = '[UNSET SEARCH] Unset ...';

export class SetSearchAction implements Action {
    readonly type = SET_SEARCH;
    constructor(public search: string) { }
}
export class UnsetSearchAction implements Action {
    readonly type = UNSET_SEARCH;
}
export type actions =
    SetSearchAction |
    UnsetSearchAction;
