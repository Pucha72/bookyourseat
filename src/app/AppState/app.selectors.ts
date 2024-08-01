import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "./app.state";
import { appReducer } from "./app.reducers";



export interface AppState{
    intialState:IAppState
}
export const AppReducer={
    intialState:appReducer
}
export const AppSelector=createFeatureSelector<IAppState>('intialState');


//getLoginStatus Selector
export const getLoginStatus=createSelector(AppSelector,
    (state)=>{
        const user=JSON.stringify(localStorage.getItem('userData'))
        console.log(JSON.parse(user)); 
                if(JSON.parse(user)?.Id>0){
                    return true
                }
                return state.isauthenticated as Boolean;
             }
)

export const getUser=createSelector(AppSelector,
    (state)=>{
                return state.employee;
             }
)