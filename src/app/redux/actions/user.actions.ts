import { Action } from '@ngrx/store';

export const LOGIN_USER = '[LOGIN] Login User ...';
export const LOGOUT_USER = '[LOGOUT] Logout User ...';

export class LoginUserAction implements Action {
    readonly type = LOGIN_USER;
    constructor(public user: string) { }
}
export class LogoutUserAction implements Action {
    readonly type = LOGOUT_USER;
}
export type actions =
    LoginUserAction |
    LogoutUserAction;
