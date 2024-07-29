import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmyseatComponent } from './bookmyseat/bookmyseat.component';
import { ManagebookingsComponent } from './managebookings/managebookings.component'; 
import { RouterModule, Routes } from '@angular/router';


export const routes:Routes=[
  {path:'',
    component:DashboardComponent,
    children:[
      {path:'bookseat', component:BookmyseatComponent},
      {path:'managebookings', component:ManagebookingsComponent}
    ] 
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    BookmyseatComponent,
    ManagebookingsComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
