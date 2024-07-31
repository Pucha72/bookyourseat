import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppState/app.state';
import { deleteBooking, loadMyBooking } from '../BookingState/booking.actions';
import { loadMyBookingSelector } from '../BookingState/booking.selectors';
import { getUser } from 'src/app/AppState/app.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit,OnDestroy {
  userID=0
  
  public mybookings:any;
public _subscription=new Subscription()
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
    this._subscription= this.store.select(loadMyBookingSelector).subscribe(data=>this.mybookings=data)
  }

  deleteBooking(id:number){
    if(confirm('Proceed deleting record!')){
    this.store.dispatch(deleteBooking({id:id}));
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
