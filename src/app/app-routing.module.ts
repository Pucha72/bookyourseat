import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'dashboard',
    //canActivateChild:[AuthguardGuard],
    loadChildren:()=> import('./booking/booking.module').then((m)=>m.BookingModule)
  },
  {path:'pagenotfound',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
