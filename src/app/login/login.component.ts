import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getLoginStatus, getUser } from '../AppState/app.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../AppState/app.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  public loginform:any;

  constructor(private store:Store<AppState>,private formBuilder:FormBuilder,private route:Router) { }

 // loginSubscription:Subscription
  ngOnInit(): void { 
    this.loginform=this.formBuilder.group(
      {
        "associateNumber":['EMP12345',Validators.required],
        "password":['12345',Validators.required], 
      }
    )
  }

  AuthenticateUser(){ 

    if(!this.loginform.valid){
     return this.loginform.markAllAsTouched();
    }
   
    const payload={associateNumber:this.loginform.value.associateNumber,password:this.loginform.value.password}
    this.store.dispatch(login({data:payload}));
    //this.loginSubscription=
    
    this.store.select(getUser).subscribe(data=>{ 
      debugger
        localStorage.setItem('userData',JSON.stringify(data)); 
        if(data)
          this.route.navigate(['/dashboard']);
        else
        this.route.navigate(['/login']); 
    }) 

    // this.store.select(getLoginStatus).subscribe(data=>{
    //   if(data)
    //     this.route.navigate(['/dashboard']);
    //   else
    //   this.route.navigate(['/']); 
    // }) 
  }
   
  ngOnDestroy(): void {
   // this.loginSubscription.unsubscribe();
  }

}
