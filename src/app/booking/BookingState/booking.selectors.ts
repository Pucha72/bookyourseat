import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { IBookingState } from "./booking.state"; 
import { ISeatMaster, SeatMaster } from "src/app/Model/SeatMaster";
import { IBooking } from "src/app/Model/Booking";


// export interface AppState{
//     intialState:IAppState
// }
// export const AppReducer={
//     intialState:appReducer
// }
const BookingSelector=createFeatureSelector<IBookingState>('intialState');


//getLoginStatus Selector
export const loadOfficeLocationsSelector=createSelector(BookingSelector,
    (state)=>{
                return state.officelocation;
             }
)


export const loadSeatsSelector=createSelector(BookingSelector,(state:any,props:any)=>{ 
    return state.seatmaster;//.find((x:ISeatMaster)=>x.locationId==props.locationId);
})
 


export const loadMyBookingSelector=createSelector(BookingSelector,
    (state)=>{
        return state.bookings;
    }
)
 
 
export const loadSelectedBooking = (Id: number) => createSelector(BookingSelector, (state) => {
    return state.bookings.find((x)=>x.id==Id)  
});

//new way of passing params to selectors remembers *
export const loadSeatsSelectedSelector = (locationId: number) => createSelector(BookingSelector, (state) => {
    return state.seatmaster.find(x=>x.locationId==locationId); 
});
