import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmyseatComponent } from './bookmyseat/bookmyseat.component';
import { ManagebookingsComponent } from './managebookings/managebookings.component'; 
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BookingEffects } from './BookingState/booking.effects';
import { StoreModule } from '@ngrx/store';
import {  bookingReducer } from './BookingState/booking.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardmenuComponent } from './dashboardmenu/dashboardmenu.component';
import { EditbookingComponent } from './editbooking/editbooking.component';
 


export const routes:Routes=[
  {
    path:'',
    component:DashboardComponent,
    children:[
      
    ] 
  }, 
  {path:'bookseat', component:BookmyseatComponent},
  {path:'managebookings', component:ManagebookingsComponent},
  {path:'editbooking/:Id',component:EditbookingComponent},
]

@NgModule({
  declarations: [
    DashboardComponent,
    BookmyseatComponent,
    ManagebookingsComponent,
    DashboardmenuComponent,
    EditbookingComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes), 
    EffectsModule.forFeature([BookingEffects]),
    StoreModule.forFeature('intialState',bookingReducer)
    
  ]
})
export class BookingModule { }
