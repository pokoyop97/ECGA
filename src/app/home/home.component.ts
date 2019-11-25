import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { AuthService } from '../common/auth.service';
import { Observable } from "rxjs/internal/Observable";
import { UserInterface } from '../models/user'

import {HttpClient} from '@angular/common/http';


import { DeviceDetectorService } from 'ngx-device-detector';

import { AngularFirestore } from "@angular/fire/firestore";


@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )

export class HomeComponent implements OnInit {
  public item: string;
  public infoML: Observable<ProductInterface[]>;
  public infoE: Observable<ProductInterface[]>;
  ipAddress:any;
  logged:boolean;
  searchForm = new FormGroup( {
    query: new FormControl( '' )
  } );

  categories: Map<string, string[]>;
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };

  constructor(,private http: HttpClient, private deviceService: DeviceDetectorService, private router: Router , private apiService: ApiService, private authService: AuthService, private afs: AngularFirestore,) { }

  onSubmit(id: string) {
    this.item = this.searchForm.value.query;
    if(this.item != ''){
      this.apiService.getItemML(this.item).subscribe( res => {
        this.infoML = res.results;
      });
      this.apiService.getItemE(this.item).subscribe( res => {
        //console.log(res.findItemsByKeywordsResponse[0].searchResult[0].item);
        this.infoE = res.findItemsByKeywordsResponse[0].searchResult[0].item;
      });
    }else{
      alert("Ingrese un elemento para buscar")
    }
  }
  
  
  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.user.User_id = user.uid;
        this.logged=true;
      }else{
        this.logged = false;
      }
    })
    
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      this.ipAddress = data.ip
    })
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }

  OnAddVSML(imagen:string, titulo:string, precio:string, modeloN:string, modelo:string){
    alert("Se agrego al comparador")
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: imagen,
      model: modeloN + " : " + modelo
    }
    this.afs.doc(`vs/${this.ipAddress}`).collection(this.ipAddress).add(newProject);
  }

  OnAddVSE(imagen:string, titulo:string, precio:string, modeloN:string){
    alert("Se agrego al comparador")
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: imagen,
    }
    this.afs.doc(`vs/${this.ipAddress}`).collection(this.ipAddress).add(newProject);
  }

}
export interface ProductInterface {
  name?: string;
  img?:string;
  precio?: string;
  atributos?:string;
}