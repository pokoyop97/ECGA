import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../common/api.service';
import { AuthService } from '../../../common/auth.service';
import { Observable } from "rxjs/internal/Observable";
import { UserInterface } from '../../../models/user'

import {HttpClient} from '@angular/common/http';


import { DeviceDetectorService } from 'ngx-device-detector';

import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-procesador',
  templateUrl: './procesador.component.html',
  styleUrls: ['../armado.component.scss']
})
export class ProcesadorComponent implements OnInit {
  public item: string;
  public valorTipo: string;
  public cadena : string; 
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

  constructor(private activatedRoute:ActivatedRoute,private http: HttpClient, private deviceService: DeviceDetectorService, private router: Router , private apiService: ApiService, private authService: AuthService, private afs: AngularFirestore,) { }

  onSubmit(id: string, modelo:string) {
    this.cadena = id +' '+modelo
    alert(this.cadena)
    if(id != ''){
      this.apiService.getItemML(this.cadena).subscribe( res => {
        this.infoML = res.results;
        console.log(this.infoML)
      });
    }else{
      alert("Ingrese un elemento para buscar")
    }
  }
  onSubmit1(id:string){
    if(id != ''){
      this.apiService.getItemML(id).subscribe( res => {
        this.infoML = res.results;
        console.log(this.infoML)
      });
    }else{
      alert("Ingrese un elemento para buscar")
    }
  }

  onSubmit2(){
    this.valorTipo = this.searchForm.value.query;
    alert(this.valorTipo)
    this.onSubmit( this.marca, this.valorTipo);
  }
  
  public marca:string;
  ngOnInit() {
    this.marca = this.activatedRoute.snapshot.paramMap.get("marca");
    this.onSubmit1(this.marca);
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
  OnAddBUILD(nombre:string, modelo:string, img:string, titulo:string, precio:string){
    
    alert("Se agrego al Carrito")
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: img,
      modelo: nombre +" "+modelo,
    }
    this.afs.doc(`build/${this.ipAddress}`).collection(this.ipAddress).add(newProject)
    this.router.navigate(['/motherboard/asus '+this.marca+' '+nombre])

  }
}
export interface ProductInterface {
  name?: string;
  img?:string;
  precio?: string;
  atributos?:string;
}