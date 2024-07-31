import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects"; 
import { map, mergeMap } from "rxjs";
import { addbooking, addbookingsuccess, deleteBooking, deleteBookingSuccess, loadMyBooking, loadMyBooking_success, loadOfficeLocations, loadOfficeLocations_success, loadSeats, loadSeats_success, updateBooking, updateBookingSuccess } from "./booking.actions";
import { IOfficeLocation } from "src/app/Model/OfficeLocation";
import { BookingsService } from "src/app/services/bookings.service";


@Injectable()

export class BookingEffects {

    constructor(private action$:Actions,private bookingservice:BookingsService){

    }

    _loadOfficeLocations=createEffect(()=>{
        
        return this.action$.pipe(
            ofType(loadOfficeLocations),
            mergeMap((action) => {
                return this.bookingservice.loadOfficeLocations().pipe(
                    map((data) => {
                        debugger
                        return loadOfficeLocations_success({data : data });
                    })
                );
            })
        );
    }
    );

   _loadMyBookings=createEffect(()=>{
    return this.action$.pipe(

        ofType(loadMyBooking),
        mergeMap((action)=>{
            return this.bookingservice.loadmybookings(action.employeeId).pipe(
                map((data)=>{
                    return loadMyBooking_success({data:data});
                }
            )
            ) 
        })
    )
   })

   _loadSeats=createEffect(()=>{
        return this.action$.pipe(
            ofType(loadSeats),
            mergeMap((action)=>{
                return this.bookingservice.loadSeats(action.data).pipe(
                    map((data)=>{
                        return loadSeats_success({data:data});
                    })
                )
            })
        )
   })

   _addbooking=createEffect(()=>{
    return this.action$.pipe(
        ofType(addbooking),
        mergeMap((action)=>{
            return this.bookingservice.addBooking(action.data).pipe(
                map((data)=>{
                    return addbookingsuccess({data:data});
                })
            )
        })
    )
   })


   _updateBooking=createEffect(()=>{
    return this.action$.pipe(
        ofType(updateBooking),
        mergeMap((action)=>{
            return this.bookingservice.updateBooking(action.data).pipe( 
                map((data)=>{
                    return updateBookingSuccess();
                })
            )
        })
    )
   })
   _deleteBooking=createEffect(()=>{
     return this.action$.pipe(
        ofType(deleteBooking),
        mergeMap((action)=>{
            return this.bookingservice.deleteBooking(action.id).pipe(
                map((data)=>{
                    return deleteBookingSuccess({id:action.id});
                })
            )
        })
     )
   })


}