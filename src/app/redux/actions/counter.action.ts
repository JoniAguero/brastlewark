import { Action } from '@ngrx/store';

export const SET_COUNTER = '[SET COUNTER] Set ...';
export const UNSET_COUNTER = '[UNSET COUNTER] Unset ...';

export class SetCounter implements Action {
    readonly type = SET_COUNTER;
    constructor(public counter: number) { }
}

export class UnsetCounter implements Action {
    readonly type = UNSET_COUNTER;
}
export type actions =
    SetCounter |
    UnsetCounter;
