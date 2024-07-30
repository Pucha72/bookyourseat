import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppState/app.state';
import { loadMyBooking } from '../BookingState/booking.actions';
import { loadMyBookingSelector } from '../BookingState/booking.selectors';
import { getUser } from 'src/app/AppState/app.selectors';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit {
  userID=0
  
  public mybookings:any;

  constructor(private store:Store<IAppState>) { }
  

  ngOnInit(): void {
    this.store.select(getUser).subscribe(data=>{
      this.userID=data?.id?data?.id:0;
    })
    this.loadMyBookings();
  }
 
  loadMyBookings(){
    // this.store.select(get) 
    this.store.dispatch(loadMyBooking({employeeId:this.userID}));
    this.store.select(loadMyBookingSelector).subscribe(data=>this.mybookings=data)
  }
}
