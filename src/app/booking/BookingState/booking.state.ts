import { Booking, IBooking } from "src/app/Model/Booking" 
import { IOfficeLocation } from "src/app/Model/OfficeLocation"
import { ISeatMaster, SeatMaster } from "src/app/Model/SeatMaster"

 
export interface IBookingState{ 
    officelocation:IOfficeLocation[], 
    seatmaster:ISeatMaster[], 
    bookings:IBooking[]
}
export const intialState:IBookingState={ 
    officelocation:[],
    seatmaster: [], 
    bookings: []
}