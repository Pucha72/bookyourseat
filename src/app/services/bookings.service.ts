import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOfficeLocation } from '../Model/OfficeLocation';
import { ApiEndpoint } from '../Model/Endpoint';
import { SeatRequest } from '../Model/SeatRequest';
import { SeatMaster } from '../Model/SeatMaster';
import { Booking, IBooking } from '../Model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }

  loadOfficeLocations():Observable<IOfficeLocation[]>{
    return this.http.get<IOfficeLocation[]>(ApiEndpoint.LoadOfficeLocations);
  }

  loadSeats(input:SeatRequest):Observable<SeatMaster[]>{
    return this.http.post<SeatMaster[]>(ApiEndpoint.LoadSeats,input);
  }

  loadmybookings(employeeId:number):Observable<SeatMaster[]>{
    return this.http.get<SeatMaster[]>(ApiEndpoint.LoadMyBookings+employeeId);
  }

  addBooking(input:Booking):Observable<IBooking>{
    debugger
    return this.http.post<IBooking>(ApiEndpoint.AddBooking,input);
  }

  updateBooking(input:Booking):Observable<boolean>{
    return this.http.put<boolean>(ApiEndpoint.UpdateBooking,input);
  }

  deleteBooking(input:Booking):Observable<boolean>{
    return this.http.delete<boolean>(ApiEndpoint.DeleteBooking+input);
  }
}
