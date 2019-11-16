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
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private projects: any[];
  constructor(
    private http: HttpClient,
    private dataApi: DataApiService,
    private afs: AngularFirestore,
    ) { }

    
  ipAddress:any;
  ngOnInit() {
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

}
