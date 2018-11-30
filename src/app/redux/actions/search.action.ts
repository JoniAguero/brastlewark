import { Action } from '@ngrx/store';

export const SET_SEARCH = '[SET SEARCH] Set ...';
export const UNSET_SEARCH = '[UNSET SEARCH] Unset ...';

export class SetSearch implements Action {
    readonly type = SET_SEARCH;
    constructor(public search: string) { }
}
export class UnsetSearch implements Action {
    readonly type = UNSET_SEARCH;
}
export type actions =
    SetSearch |
    UnsetSearch;
