import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { logout, logout_success } from 'src/app/AppState/app.actions';
import { AppState, getLoginStatus, getUser } from 'src/app/AppState/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  title = 'Book Your Seat';
  isAuthenticated:any;
  username="Unknown"; 
  private subscriber=new Subscription();
  constructor(private store:Store<AppState>,private route:Router){}
  ngOnInit(): void {
    this.store.select(getLoginStatus).subscribe(data=>this.isAuthenticated=data);
    //alert(this.isAuthenticated)

   this.subscriber= this.store.select(getUser).subscribe(data=>{
      this.username=data.name
    })
  }

  // logout(){
  //   debugger
  //   this.store.dispatch(logout()); 
  //   this.route.navigate(['login']);
     
  // }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
