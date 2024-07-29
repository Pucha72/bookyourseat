import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getLoginStatus } from 'src/app/AppState/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Book Your Seat';
  isAuthenticated:any;
  
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.select(getLoginStatus).subscribe(data=>this.isAuthenticated=data);
    alert(this.isAuthenticated)
  }

}
