import { createAction, props } from "@ngrx/store"  
import { Booking, IBooking } from "src/app/Model/Booking";
import { IOfficeLocation } from "src/app/Model/OfficeLocation";
import { SeatMaster } from "src/app/Model/SeatMaster";
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
export const loadMyBooking_success=createAction(LOAD_MYBOOKINGS_SUCCESS,(props<{data:Booking[]}>()));
 


//3.LOAD SEAT VARIABLE
export const LOAD_SEATS ='[loadseats page] post loadseats'
export const LOAD_SEATS_SUCCESS ='[loadseats page] post loadseats success' 
//3.LOAD SEAT ACTIONS
export const loadSeats=createAction(LOAD_SEATS,(props<{ data: ISeatRequest}>()));
export const loadSeats_success=createAction(LOAD_SEATS_SUCCESS,(props<{data:SeatMaster[]}>()));
 

//4. Add Booking
export const ADD_BOOKING='[addbooking page] post addbooking'
export const ADD_BOOKING_SUCCESS='[addbooking page] post addbooking success'
//4.Add Booking ACTIONS
export const addbooking=createAction(ADD_BOOKING,(props<{data:IBooking}>()));
export const addbookingsuccess=createAction(ADD_BOOKING_SUCCESS,(props<{data:IBooking}>()));