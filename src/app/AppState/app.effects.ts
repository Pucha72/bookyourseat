import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login.service";
import { BookingsService } from "../services/bookings.service";
import { map, mergeMap } from "rxjs";
import { autoLogin, autoLoginsuccess, login, login_success, logout, logout_success } from "./app.actions";


@Injectable()

export class AppEffects {

    constructor(private action$:Actions,private loginService:LoginService,private bookingservice:BookingsService){

    }

    _login=createEffect(()=>{
        
        return this.action$.pipe(
            ofType(login),
            mergeMap((action) => {
                return this.loginService.AuthenticateUser(action.data).pipe(
                    map((data) => {
                        debugger
                        localStorage.setItem('userData',JSON.stringify(data)); 
                        return login_success({ data: data });
                    })
                );
            })
        );
    }
    )
    _logout=createEffect(()=>{
        return this.action$.pipe(
            ofType(logout),
                map(()=> {
                    localStorage.removeItem('userData')
                    return logout_success({data:null})}) 
        )
 
    })

    _autologin=createEffect(()=>{
        return this.action$.pipe(
            ofType(autoLogin),
            map((data)=> {
                debugger
                const user=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userData'))))
                // console.log(JSON.parse(JSON.parse(user)));
                if(user)
                return login_success({data:user})
                else
                return logout_success({data:null})
            })
        )
    })

}