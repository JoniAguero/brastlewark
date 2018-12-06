import { Action } from '@ngrx/store';

export const SET_LOADING = '[LOADING] Loading ...';
export const UNSET_LOADING = '[LOADING] Finish ...';

export class SetLoadingAction implements Action {
    readonly type = SET_LOADING;
}
export class UnsetLoadingAction implements Action {
    readonly type = UNSET_LOADING;
}
export type actions =
    SetLoadingAction |
    UnsetLoadingAction;
