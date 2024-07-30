import { environment } from "src/environments/environment";

export const ApiEndpoint={

    Authentication: environment.endpoint +"api/BYS/AuthenticateUser",
    LoadOfficeLocations: environment.endpoint +"api/BYS/LoadOfficeLocations",
    LoadSeats: environment.endpoint +"api/BYS/LoadSeats",
    LoadMyBookings: environment.endpoint +"api/BYS/LoadMyBookings?emplyoeeId=" ,

    AddBooking: environment.endpoint +"api/BYS/AddBookings", 
    UpdateBooking: environment.endpoint +"api/BYS/EditMyBookings" ,
    DeleteBooking: environment.endpoint +"api/BYS/DeleteBooking?Id=" 


}