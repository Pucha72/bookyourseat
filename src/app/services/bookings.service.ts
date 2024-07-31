import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOfficeLocation } from '../Model/OfficeLocation';
import { ApiEndpoint } from '../Model/Endpoint';
import { ISeatRequest, SeatRequest } from '../Model/SeatRequest';
import { ISeatMaster, SeatMaster } from '../Model/SeatMaster';
import { Booking, IBooking } from '../Model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }

  loadOfficeLocations():Observable<IOfficeLocation[]>{
    return this.http.get<IOfficeLocation[]>(ApiEndpoint.LoadOfficeLocations);
  }

  loadSeats(input:ISeatRequest):Observable<ISeatMaster[]>{
    return this.http.post<ISeatMaster[]>(ApiEndpoint.LoadSeats,input);
  }

  loadmybookings(employeeId:number):Observable<IBooking[]>{
    return this.http.get<IBooking[]>(ApiEndpoint.LoadMyBookings+employeeId);
  }

  addBooking(input:IBooking):Observable<IBooking>{
    debugger
    return this.http.post<IBooking>(ApiEndpoint.AddBooking,input);
  }

  updateBooking(input:IBooking):Observable<boolean>{
    return this.http.put<boolean>(ApiEndpoint.UpdateBooking,input);
  }

  deleteBooking(input:number):Observable<boolean>{
    return this.http.delete<boolean>(ApiEndpoint.DeleteBooking+input);
  }
}
