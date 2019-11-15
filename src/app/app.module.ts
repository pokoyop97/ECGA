import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApiService } from './common/api.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { appRoutes } from './routes';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes ),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    AppComponent,
  ]
} )
export class AppModule { }