import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import {ButtonModule} from 'primeng/button';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { ApiService } from './common/api.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';


import { DeviceDetectorModule } from 'ngx-device-detector';
import { ComparacionesComponent } from './components/comparaciones/comparaciones.component';

import { NgxPayPalModule } from 'ngx-paypal';

import { ArmadoComponent } from './components/armado/armado.component';
import { ProcesadorComponent } from './components/armado/procesador/procesador.component';
import { MotherboardComponent } from './components/armado/motherboard/motherboard.component';
import { RamComponent } from './components/armado/ram/ram.component';
import { HddComponent } from './components/armado/hdd/hdd.component';
import { GddrComponent } from './components/armado/gddr/gddr.component';
import { CaseComponent } from './components/armado/case/case.component';
import { PowerComponent } from './components/armado/power/power.component';
import { ResumenComponent } from './components/armado/resumen/resumen.component';
import { Resumen2Component } from './components/armado/resumen2/resumen2.component';
import { AdminComponent } from './admin/admin/admin.component';
@NgModule( {
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,  
    DeviceDetectorModule.forRoot(),
    NgxPayPalModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    ComparacionesComponent,
    ArmadoComponent,
    ProcesadorComponent,
    MotherboardComponent,
    RamComponent,
    HddComponent,
    GddrComponent,
    CaseComponent,
    PowerComponent,
    ResumenComponent,
    Resumen2Component,
    AdminComponent,
  ],
  providers: [
    AngularFireAuth, 
    AngularFirestore,{provide: StorageBucket, useValue: "gs://ecga-ef38d.appspot.com/"},
    ApiService,
  ],
  bootstrap: [
    AppComponent,
  ]
} )
export class AppModule { }