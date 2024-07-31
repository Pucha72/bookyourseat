import { AfterViewChecked, Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getLoginStatus } from './AppState/app.selectors';
import { Router } from '@angular/router';
import { intialState } from './AppState/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, DoCheck {
  title = 'Book Your Seat | Login';
  isAuthenticated:any;
  
  constructor(private store:Store<AppState>,private route:Router){}
  
//   //step1:Session
// @HostListener('window:beforeunload', ['$event'])
// beforeunloadHandler(event: Event): void {
//   sessionStorage.setItem('applicationState', JSON.stringify(intialState));
// }

  ngOnInit(): void {
   
    this.store.select(getLoginStatus).subscribe(data=>this.isAuthenticated=data);
    if(!this.isAuthenticated) 
      this.route.navigate(['login']);
  }
  ngDoCheck(): void {
    //clearing history on back browser button
    history.pushState('login', 'login');  
     
  }
  
}
