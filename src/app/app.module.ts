import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppReducer } from './AppState/app.selectors';
import { BookingsService } from './services/bookings.service';
import { LoginService } from './services/login.service';
import { AppEffects } from './AppState/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AppEffects]),
    //to debug store
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    HttpClientModule,

    MatMenuModule,
    MatButtonModule
  ],
  providers: [LoginService,BookingsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
