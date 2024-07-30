import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../Model/Login';
import { Observable } from 'rxjs';
import {  IEmployee } from '../Model/Employee';
import { ApiEndpoint } from '../Model/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  AuthenticateUser(data:ILogin):Observable<IEmployee>{
    return this.http.post<IEmployee>(ApiEndpoint.Authentication,data)
  }
  
}
