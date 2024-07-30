import { createAction, props } from "@ngrx/store"
import { ILogin } from "../Model/Login"
import {  IEmployee } from "../Model/Employee";

export const LOGIN ='[login page] post login'
export const LOGIN_SUCCESS ='[login page] post login success'
export const LOGOUT ='[logout page] post logout'
export const LOGOUT_SUCCESS ='[logout page] post logout success'

export const login=createAction(LOGIN,(props<{data:ILogin}>()));

export const login_success=createAction(LOGIN_SUCCESS,(props<{data:IEmployee}>()));

export const logout=createAction(LOGOUT);
export const logout_success=createAction(LOGOUT_SUCCESS,(props<{data:null}>()));