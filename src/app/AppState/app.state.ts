import { Booking } from "../Model/Booking";
import { Employee } from "../Model/Employee";
import { IOfficeLocation } from "../Model/OfficeLocation";
import { SeatMaster } from "../Model/SeatMaster";

export interface IAppState{
    isauthenticated:boolean,
    officelocation:IOfficeLocation[] |null,
    seatmaster:SeatMaster[] |null,
    employee:Employee |null,
    bookings:Booking[] |null

}
export const intialState:IAppState={
    isauthenticated: false,
    officelocation: null,
    seatmaster: null,
    employee: null,
    bookings: null
}