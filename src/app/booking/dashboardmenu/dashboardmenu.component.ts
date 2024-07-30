import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { logout } from 'src/app/AppState/app.actions';
import { AppState, getLoginStatus, getUser } from 'src/app/AppState/app.selectors';

@Component({
  selector: 'app-dashboardmenu',
  templateUrl: './dashboardmenu.component.html',
  styleUrls: ['./dashboardmenu.component.css']
})
export class DashboardmenuComponent implements OnInit {


  title = 'Book Your Seat'; 
  username="Unknown";
  role="Unknown";
  associatenumber="Unknown";
  private subscriber=new Subscription();
  constructor(private store:Store<AppState>,private route:Router){}
  ngOnInit(): void { 
   this.subscriber= this.store.select(getUser).subscribe(data=>{
      this.username=data.name,
      this.role=data.role
      this.associatenumber=data.associateNumber
    })
  }

  logout(){
    debugger
    this.store.dispatch(logout()); 
    this.route.navigate(['login']);
     
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
