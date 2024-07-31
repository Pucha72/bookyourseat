import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppState/app.state';
import { loadMyBookingSelector, loadOfficeLocationsSelector, loadSeatsSelector } from '../BookingState/booking.selectors';
import { addbooking, loadOfficeLocations, loadSeats } from '../BookingState/booking.actions';
import { IOfficeLocation, OfficeLocation } from 'src/app/Model/OfficeLocation';
import { ISeatMaster } from 'src/app/Model/SeatMaster';
import { FormBuilder, Validators } from '@angular/forms';
import { getUser } from 'src/app/AppState/app.selectors';
import { IBooking } from 'src/app/Model/Booking';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookmyseat',
  templateUrl: './bookmyseat.component.html',
  styleUrls: ['./bookmyseat.component.css']
})
export class BookmyseatComponent implements OnInit, OnDestroy,AfterViewInit {
  public officeLocations:any;
  public availableSeats:any;
 public citys:any 
 public seatReq:any;
public bookmyseatform:any
public enableDateStart=''
public enableDateEnd=''
private _subscription=new Subscription()
  constructor(private store:Store<IAppState>,private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.enableDateStart=new Date().toISOString().slice(0,10);
    this.enableDateEnd=new Date().toISOString().slice(0,10); 
    this.loadOfficeLocations();
    this.showGroup();
    this.bookmyseatform=this.formBuilder.group({
      "dateOfVisit":['',Validators.required],
      "seatId":[0,Validators.required] ,
      "locationId":[0,Validators.required] ,
    })

    // id :number,
    // employeeId :string,
    // dateOfVisit  :Date,
    // seatId  :string,
    // seatpath  :string,
    // location :string,
    // city :string
  }
 
  loadOfficeLocations(){
    this.store.dispatch(loadOfficeLocations());
    this.store.select(loadOfficeLocationsSelector).subscribe(data=>this.officeLocations=data) 
    this.showGroup() ; 
  }

  onCityChange(selectedCity:string,dateOfVisit:string)
  {    
    if(!this.bookmyseatform.valid){
      if(this.bookmyseatform.value.locationId==0){ 
       return ;
        
      } 
      return this.bookmyseatform.markAllAsTouched();
    }
    debugger 
    const locationId=Number(selectedCity)
    this.seatReq={locationId:locationId,dateOfVisit:new Date(dateOfVisit)}
    this.store.dispatch(loadSeats({data:this.seatReq}));   
    this.store.select(loadSeatsSelector,{locationId}).subscribe(data=>this.availableSeats=data);
    
  }

  addbookseat(){
    debugger
    if(!this.bookmyseatform.valid){
      if(this.bookmyseatform.value.locationId==0){ 
       
        
      }
      if(this.bookmyseatform.value.seatId==0){  

      } 
      return this.bookmyseatform.markAllAsTouched();
    }
    let userID:number | undefined;
    this.store.select(getUser).subscribe(data=>{
      userID=data?.id
    })
  const data:IBooking={
    id :0,
    employeeId  :userID? userID : 0,
    associatenumber  :'',
    dateOfVisit  :this.bookmyseatform.value.dateOfVisit,
    seatId  :this.bookmyseatform.value.seatId,
    seatpath  :'',
    location :'',
    city :''
  }

    this.store.dispatch(addbooking({data:data}));
    alert('Booking Added')
    this.route.navigate(['/dashboard/managebookings']);

  }


  showGroup() {
    //First, group the products by category
    const group = this.officeLocations.reduce((acc: any, curr:any) => {
      let key = curr.city;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});

    //Get the categories and product related.
    this.citys = Object.keys(group ).map(key => ({
      city: key,
      locations: group[key]
    }));

  }


  dateOfVisitChange(){
    const _dateOfVisit= this.bookmyseatform.value.dateOfVisit;
    this.store.select(loadMyBookingSelector)
  }


  ngAfterViewInit(): void {
    this.enableDateStart=new Date().toISOString().slice(0,10);
    this.enableDateEnd=new Date().toISOString().slice(0,10); 
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
