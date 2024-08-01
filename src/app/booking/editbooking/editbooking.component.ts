import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppState/app.state';
import { loadOfficeLocationsSelector, loadSeatsSelector, loadSelectedBooking } from '../BookingState/booking.selectors';
import { addbooking, loadOfficeLocations, loadSeats, updateBooking } from '../BookingState/booking.actions';
import { IOfficeLocation, OfficeLocation } from 'src/app/Model/OfficeLocation';
import { ISeatMaster } from 'src/app/Model/SeatMaster';
import { FormBuilder, Validators } from '@angular/forms';
import { getUser } from 'src/app/AppState/app.selectors';
import { IBooking } from 'src/app/Model/Booking';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { IBookingState } from '../BookingState/booking.state';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css']
})
export class EditbookingComponent implements  OnInit, OnDestroy, AfterViewInit,AfterContentChecked  {

  public officeLocations:any;
  public availableSeats:any;
 public citys:any 
 public seatReq:any;
public editbookmyseatform:any
public enableDateStart=''
public enableDateEnd=''
public selectedlocation="";

public selectedseat="";
private _subscription=new Subscription()
private currentRecordId:any;

  constructor(private store:Store<IAppState>,private formBuilder:FormBuilder, private route:Router,
    private activeRoute:ActivatedRoute
  ) { }
public selectedItem:any
  ngOnInit(): void {
debugger
    this.activeRoute.paramMap.subscribe(parameters=>{
      debugger
      const Id= parameters.get('Id');
      this.currentRecordId=Id;
      this.store.select(loadSelectedBooking(Number(Id))).subscribe(data=>{ 
        debugger
        console.log(data);
       this.editbookmyseatform=this.formBuilder.group({
        "dateOfVisit":[data?.dateOfVisit,Validators.required],
        "seatId":[data?.seatId,Validators.required] ,
        "locationId":[data?.locationId,Validators.required] ,
      }) 
      })

      this.update_onCityChange(this.editbookmyseatform.value.locationId,this.editbookmyseatform.value.dateOfVisit)
      
   
     });
    //  this.editbookmyseatform=this.formBuilder.group({
    //   "dateOfVisit":['2024-07-31',Validators.required],
    //   "seatId":[0,Validators.required] ,
    //   "locationId":[0,Validators.required] ,
    // });
      
     this.update_loadOfficeLocations();
     this.showGroup();
  

    // id :number,
    // employeeId :string,
    // dateOfVisit  :Date,
    // seatId  :string,
    // seatpath  :string,
    // location :string,
    // city :string
  }
 
  update_loadOfficeLocations(){
    this.store.dispatch(loadOfficeLocations());
    this.store.select(loadOfficeLocationsSelector).subscribe(data=>this.officeLocations=data) 
    this.showGroup() ; 
  }

  update_onCityChange(selectedCity:string,dateOfVisit:string)
  {    
    if(!this.editbookmyseatform.valid){
      if(this.editbookmyseatform.value.locationId==0){ 
       return ;
        
      } 
      return this.editbookmyseatform.markAllAsTouched();
    }
    debugger 
    const locationId=Number(selectedCity)
    this.seatReq={locationId:locationId,dateOfVisit:new Date(dateOfVisit)}
    this.store.dispatch(loadSeats({data:this.seatReq}));   
    this.store.select(loadSeatsSelector,{locationId}).subscribe(data=>this.availableSeats=data);
 
  }

  updatebookseat(){
    debugger
    if(!this.editbookmyseatform.valid){
      if(this.editbookmyseatform.value.locationId==0){ 
       
        
      }
      if(this.editbookmyseatform.value.seatId==0){  

      } 
      return this.editbookmyseatform.markAllAsTouched();
    }
    let userID:number | undefined;
    this.store.select(getUser).subscribe(data=>{
      userID=data?.id
    })
  const data:IBooking={
    id :this.currentRecordId,
    employeeId  :userID? userID : 0,
    associatenumber  :'',
    dateOfVisit  :this.editbookmyseatform.value.dateOfVisit,
    seatId  :this.editbookmyseatform.value.seatId,
    seatpath  :'',
    location :'',
    city :''
  }

    this.store.dispatch(updateBooking({data:data}));
    alert('Booking Details Updated')
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

  ngAfterViewInit(): void {
    this.selectedlocation=this.editbookmyseatform.value.locationId
    this.selectedseat=this.editbookmyseatform.value.seatId  
    this.editbookmyseatform.setValue({
      locationId: this.editbookmyseatform.value.locationId,
      seatId: this.editbookmyseatform.value.seatId ,
      dateOfVisit: formatDate(this.editbookmyseatform.value.dateOfVisit, 'yyyy-MM-dd', 'en') ,
   });
  
  }
  ngAfterContentChecked(): void {
    this.enableDateStart=new Date().toISOString().slice(0,10); 
      this.editbookmyseatform.controls.seatId.setValue( this.editbookmyseatform.value.seatId);
    this.editbookmyseatform.controls.locationId.setValue( this.editbookmyseatform.value.locationId);
  }

  ngOnDestroy(): void {
    
    this.officeLocations=[];
    this.availableSeats=[];
    this.citys=[] 
    this.seatReq=[];
   this.editbookmyseatform=null
   this.enableDateStart=''
   this.enableDateEnd=''
   this.selectedlocation=""; 
   this.selectedseat=""; 
   this.currentRecordId=0
   this.selectedItem=0
    this._subscription.unsubscribe();
  }

}
