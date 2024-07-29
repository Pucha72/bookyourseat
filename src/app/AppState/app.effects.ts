import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login.service";
import { BookingsService } from "../services/bookings.service";
import { map, mergeMap } from "rxjs";
import { login, login_success } from "./app.actions";


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
                        return login_success({ data: data });
                    })
                );
            })
        );
    }
    )
}