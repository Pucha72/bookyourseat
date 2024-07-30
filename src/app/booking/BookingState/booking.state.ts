import { Booking } from "src/app/Model/Booking" 
import { IOfficeLocation } from "src/app/Model/OfficeLocation"
import { SeatMaster } from "src/app/Model/SeatMaster"

 
export interface IBookingState{ 
    officelocation:IOfficeLocation[],
    seatmaster:SeatMaster[], 
    bookings:Booking[]

}
export const intialState:IBookingState={ 
    officelocation:[],
    seatmaster: [], 
    bookings: []
}