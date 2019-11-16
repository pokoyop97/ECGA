import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { AuthService } from '../../common/auth.service';
import { Observable } from "rxjs/internal/Observable";
import { UserInterface } from '../../models/user'

import {HttpClient} from '@angular/common/http';


import { AngularFirestore } from "@angular/fire/firestore";
import { DataApiService } from 'src/app/common/data-api.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };
  
  ipAddress:any;
  logged:boolean;
  private projects: any[];
  constructor(private dataApi: DataApiService ,private http: HttpClient, private router: Router , private apiService: ApiService, private authService: AuthService, private afs: AngularFirestore,) { }

    
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
      this.dataApi.getAllproducts("cart",this.ipAddress).subscribe(projects => {
        this.projects = projects;
        console.log(this.projects)
      });
    }) 
  }

  OnDelCart(docID: string) {
    this.afs
      .doc(`cart/${this.ipAddress}/`)
      .collection(`${this.ipAddress}`)
      .doc(docID)
      .delete()
      .then(() => {
        alert("Se elimino el producto del comparador");
      })
      .catch(err => {
        console.log(err);
      });
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }

}
