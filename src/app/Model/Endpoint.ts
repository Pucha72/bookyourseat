import { environment } from "src/environments/environment";

export const ApiEndpoint={

    Authentication: environment.endpoint +"api/BYS/AuthenticateUser",
    LoadOfficeLocations: environment.endpoint +"api/BYS/LoadOfficeLocations",
    LoadSeats: environment.endpoint +"api/BYS/LoadSeats",
    LoadMyBookings: environment.endpoint +"api/BYS/LoadMyBookings" ,

    AddBooking: environment.endpoint +"api/BYS/LoadMyBookings", 
    UpdateBooking: environment.endpoint +"api/BYS/EditMyBookings" ,
    DeleteMyBookings: environment.endpoint +"api/BYS/DeleteBooking" 


}