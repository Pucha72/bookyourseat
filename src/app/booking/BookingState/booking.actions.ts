import { createAction, props } from "@ngrx/store"  
import { Booking, IBooking } from "src/app/Model/Booking";
import { IOfficeLocation } from "src/app/Model/OfficeLocation";
import { ISeatMaster, SeatMaster } from "src/app/Model/SeatMaster";
import { ISeatRequest } from "src/app/Model/SeatRequest";
//1.LOAD OFFICE VARIABLE
export const LOAD_OFFICE_LOCATIONS ='[location page] post location'
export const LOAD_OFFICE_LOCATIONS_SUCCESS ='[location page] post location success'  
//1.LOAD OFFICE ACTIONS
export const loadOfficeLocations=createAction(LOAD_OFFICE_LOCATIONS);
export const loadOfficeLocations_success=createAction(LOAD_OFFICE_LOCATIONS_SUCCESS,(props<{data:IOfficeLocation[]}>()));

//2.LOAD MYBOOKING VARIABLE
export const LOAD_MYBOOKINGS ='[loadmybooking page] post loadmybooking'
export const LOAD_MYBOOKINGS_SUCCESS ='[loadmybooking page] post loadmybooking success' 
//2.LOAD OFFICE ACTIONS
export const loadMyBooking=createAction(LOAD_MYBOOKINGS,(props<{ employeeId: number}>()));
export const loadMyBooking_success=createAction(LOAD_MYBOOKINGS_SUCCESS,(props<{data:IBooking[]}>()));
 


//3.LOAD SEAT VARIABLE
export const LOAD_SEATS ='[loadseats page] post loadseats'
export const LOAD_SEATS_SUCCESS ='[loadseats page] post loadseats success' 
//3.LOAD SEAT ACTIONS
export const loadSeats=createAction(LOAD_SEATS,(props<{ data: ISeatRequest}>()));
export const loadSeats_success=createAction(LOAD_SEATS_SUCCESS,(props<{data:ISeatMaster[]}>()));
 

//4. Add Booking
export const ADD_BOOKING='[addbooking page] post addbooking'
export const ADD_BOOKING_SUCCESS='[addbooking page] post addbooking success'
//4.Add Booking ACTIONS
export const addbooking=createAction(ADD_BOOKING,(props<{data:IBooking}>()));
export const addbookingsuccess=createAction(ADD_BOOKING_SUCCESS,(props<{data:IBooking}>()));




//.6 Delete Booking
export const UPDATE_BOOKING='[updatebooking page] post updatebooking'
export const UPDATE_BOOKING_SUCCESS='[updatebooking page] post updatebooking success'

//6 Delete Booking ACTIONS
export const updateBooking=createAction(UPDATE_BOOKING,(props<{data:IBooking}>()));
export const updateBookingSuccess=createAction(UPDATE_BOOKING_SUCCESS);


//.6 Delete Booking
export const DELETE_BOOKING='[deletebooking page] post deletebooking'
export const DELETE_BOOKING_SUCCESS='[deletebooking page] post deletebooking success'

//6 Delete Booking ACTIONS
export const deleteBooking=createAction(DELETE_BOOKING,(props<{id:number}>()));
export const deleteBookingSuccess=createAction(DELETE_BOOKING,(props<{id:number}>()));
