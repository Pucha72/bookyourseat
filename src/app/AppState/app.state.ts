import { Booking, IBooking } from "../Model/Booking";
import { Employee, IEmployee } from "../Model/Employee";
import { IOfficeLocation } from "../Model/OfficeLocation";
import { ISeatMaster, SeatMaster } from "../Model/SeatMaster";

export interface IAppState{
    isauthenticated:boolean,
    officelocation:IOfficeLocation[],
    seatmaster:ISeatMaster[],
    employee:IEmployee,
    bookings:IBooking[]

}
export const intialState:IAppState={
    isauthenticated: false,
    officelocation: [],
    seatmaster: [],
    employee:{id:0,associateNumber:'',name:'',role:''},
    bookings: []
}