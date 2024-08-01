import { createReducer, on, Store } from "@ngrx/store";
import { IAppState, intialState } from "./app.state";
import { login_success, logout_success } from "./app.actions";
import { AppState } from "./app.selectors";


export const _appReducer=createReducer(
    intialState,
     //////Login & Logout BEGIN
    on(login_success,(state,action)=>{
        debugger

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
            isauthenticated:false,
            officelocation: [],
            seatmaster: [],
            bookings: []
        }
    }),
    on(logout_success,(state,action)=>{

        return {
            ...state,
            employee:{id:0,associateNumber:'',name:'',role:''},
            isauthenticated:false,
            officelocation: [],
            seatmaster: [],
            bookings: []
        }
    })
    //////Login & Logout END


)

export function appReducer(state:any,action:any){ 
    //step2 reducer setup for session
    // if(sessionStorage.getItem('applicationState')){

    //  const application: IAppState = JSON.parse(sessionStorage.getItem('applicationState'))?JSON.parse(sessionStorage.getItem('applicationState')):state; 
    //  state = application 
    // }
    return _appReducer(state,action);
}

