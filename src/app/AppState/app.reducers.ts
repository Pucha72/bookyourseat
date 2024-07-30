import { createReducer, on } from "@ngrx/store";
import { intialState } from "./app.state";
import { login_success, logout_success } from "./app.actions";


export const _appReducer=createReducer(
    intialState,
     //////Login & Logout BEGIN
    on(login_success,(state,action)=>{

        return {
            ...state,
            employee:action.data,
            isauthenticated:true
        }
    }),
    on(logout_success,(state,action)=>{

        return {
            ...state,
            employee:{id:0,associateNumber:'',name:'',role:''},
            isauthenticated:false
        }
    })
    //////Login & Logout END


)

export function appReducer(state:any,action:any){
    return _appReducer(state,action);
}

