import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getLoginStatus } from './AppState/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book Your Seat | Login';
  isAuthenticated:any;
  
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.select(getLoginStatus).subscribe(data=>this.isAuthenticated=data);
  }
}
