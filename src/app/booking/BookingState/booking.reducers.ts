import { createReducer, on } from "@ngrx/store";
import { intialState } from "./booking.state"; 
import { addbookingsuccess, deleteBookingSuccess, loadMyBooking_success, loadOfficeLocations_success, loadSeats, loadSeats_success, updateBookingSuccess } from "./booking.actions";
import { act } from "@ngrx/effects";
import { state } from "@angular/animations";
 


export const _bookingReducer=createReducer(
    intialState,
    on(loadOfficeLocations_success, (state,action) => {
        return {
          ...state,
          officelocation: action.data,
        };
      }),
    on(loadMyBooking_success,(state,action)=>{
        return {
            ...state,
            bookings:action.data
        }
    }),
    on(loadSeats_success,(state,action)=>{
        return {
            ...state,
            seatmaster:action.data
        }
    }),
    on(addbookingsuccess,(state,action)=>{
        const booking=action.data
        return {
            ...state,
            booking:[...state.bookings , booking]
        }
    }),
    on(deleteBookingSuccess,(state,action)=>{
        const activeBookigns=state.bookings.filter(x=>x.id!=action.id);
        return {

        ...state,
        bookings:activeBookigns
        }
    }),
    on(updateBookingSuccess,(state,action)=>{
        return {
            ...state

        }
    })
)

export function bookingReducer(state:any,action:any){
    return _bookingReducer(state,action);
}

