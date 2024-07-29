import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../Model/Login';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';
import { ApiEndpoint } from '../Model/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  AuthenticateUser(data:ILogin):Observable<Employee>{
    return this.http.post<Employee>(ApiEndpoint.Authentication,data)
  }
  
}
