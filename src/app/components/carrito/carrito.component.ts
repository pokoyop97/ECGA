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

import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public email?: string;
  public total: number=0;
  public contador: number=0;
  public ipAddress:any;
  public logged:boolean;
  public projects: any[];
  public user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };
  
  
  constructor(private dataApi: DataApiService ,private http: HttpClient, private router: Router , private apiService: ApiService, private authService: AuthService, private afs: AngularFirestore,) { }

    
  ngOnInit() {
    this.initConfig();
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.user.User_id = user.uid;
        this.logged=true;
        this.email = this.user.email;
        
      this.dataApi.getAllproducts("cart",this.user.email).subscribe(projects =>{
        this.projects = projects;
        
        this.total = 0;
         this.contador = 0;
         this.projects.forEach(element => {
           this.total = this.total +element.precio;
           this.contador = this.contador +1;
         });
       });
      }else{
        this.logged = false;
      }
    })
      this.http.get<{ip:string}>('https://jsonip.com')
      .subscribe( data => {
        this.ipAddress = data.ip
        this.dataApi.getAllproducts("cart",this.ipAddress).subscribe(projects => {
          this.projects = projects;
          this.total = 0;
          this.contador = 0;
          this.projects.forEach(element => {
            if(this.logged == true){
            let newProject = {
              titulo: element.titulo,
              precio: element.precio,
              img: element.img,
            }
            this.afs.doc(`cart/${this.user.email}`).collection(this.user.email).add(newProject) 
            this.afs.doc(`cart/${this.ipAddress}`).collection(`${this.ipAddress}`).doc(element.Product_id).delete().then(()=>console.log("se eliminaron"+ element.Product_id))
          }
            this.total = this.total +element.precio;
            this.contador = this.contador +1;
          });
        });
      })
  }

  OnDelCart(docID: string) {
    if(this.logged != true){
      
    this.afs
      .doc(`cart/${this.ipAddress}/`)
      .collection(`${this.ipAddress}`)
      .doc(docID)
      .delete()
      .then(() => {
        alert("Se elimino el producto del Carrito");
      })
      .catch(err => {
        console.log(err);
      });  

    }else{
    this.afs
      .doc(`cart/${this.user.email}/`)
      .collection(`${this.user.email}`)
      .doc(docID)
      .delete()
      .then(() => {
        alert("Se elimino el producto del Carrito");
      })
      .catch(err => {
        console.log(err);
      });
      
    }
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }

  public showSuccess: boolean;
  public showCancel: boolean;
  public showError: boolean;
  public initConfig(): void {
    this.payPalConfig = {
        currency: 'MXN',
        clientId: 'AYXegRob-hOQkqsOsfTxkiIwKgtnR5lgXo45MXPKzjl0uwI98fmLYY0pqjrYEizSv1LwMwYc-i271LLB',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'MXN',
                    value: `${this.total}`,
                    breakdown: {
                        item_total: {
                            currency_code: 'MXN',
                            value: `${this.total}`
                        }
                    }
                },
                items: [{
                    name: 'ECGA Compra Computacion',
                    quantity: `1`,
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'MXN',
                        value: `${this.total}`,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            actions.order.get().then(details => {
            });
            this.projects.forEach(element => {
              let newProject = {
                pedido: this.email,
                titulo: element.titulo,
                precio: element.precio,
                img: element.img,
              }
              this.afs.doc(`admin/admin`).collection(`admin`).add(newProject).then(()=> {
                alert("Se realizo la compra con exito")
                this.router.navigate(['/home'])} )
            });

        },
        onClientAuthorization: (data) => {
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            this.showCancel = true;

        },
        onError: err => {
            this.showError = true;
        },
        onClick: (data, actions) => {
            this.resetStatus();
        }
    };
  }
  resetStatus(){

  }
}
