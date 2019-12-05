import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../common/api.service';
import { AuthService } from '../../../common/auth.service';
import { Observable } from "rxjs/internal/Observable";
import { UserInterface } from '../../../models/user'

import {HttpClient} from '@angular/common/http';


import { DeviceDetectorService } from 'ngx-device-detector';

import { AngularFirestore } from "@angular/fire/firestore";
import { DataApiService } from 'src/app/common/data-api.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['../armado.component.scss']
})
export class ResumenComponent implements OnInit {
  
  public infoProcess: Observable<ProductInterface>;
  public infoMotherboard: Observable<ProductInterface>;
  public infoCase: Observable<ProductInterface>;
  public infoRam: Observable<ProductInterface>;
  public infoGddr: Observable<ProductInterface>;
  public infoPower: Observable<ProductInterface>;
  public infoHDD: Observable<ProductInterface>;
  public resultados: Observable<ProductInterface>;
  public contador: number = 0;
  public elementos: number= 0;
  @Input() arreglo = new Array();


  public total: Observable<ProductInterface>;
  
  public projects: any[];
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

  constructor(private dataApi: DataApiService ,private activatedRoute:ActivatedRoute,private http: HttpClient, private deviceService: DeviceDetectorService, private router: Router , private apiService: ApiService, private authService: AuthService, private afs: AngularFirestore,) { }
  onSubmit() {
    this.apiService.getItemE(this.projects[0].modelo).subscribe( res => {
      this.infoProcess = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    this.apiService.getItemE(this.projects[1].modelo).subscribe( res => {
      this.infoMotherboard = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    this.apiService.getItemE(this.projects[2].modelo).subscribe( res => {
      this.infoRam = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    this.apiService.getItemE(this.projects[3].modelo).subscribe( res => {
      this.infoHDD = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    this.apiService.getItemE(this.projects[4].modelo).subscribe( res => {
      this.infoGddr = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    
    this.apiService.getItemE(this.projects[5].modelo).subscribe( res => {
      this.infoCase = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
    this.apiService.getItemE(this.projects[6].modelo).subscribe( res => {
      this.infoPower = res.findItemsByKeywordsResponse[0].searchResult[0].item;
    });
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
      this.dataApi.getAllproducts("build",this.ipAddress).subscribe(projects => {
        this.projects = projects;
        console.log(this.projects)
      });
    })
    
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }
  OnAddCart(img:string, titulo:string, precio:string, docID:string){
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: img,
    }
    this.afs.doc(`cart/${this.ipAddress}/`).collection(this.ipAddress).add(newProject)
    this.afs.doc(`build/${this.ipAddress}/`).collection(`${this.ipAddress}`).doc(docID).delete().then(() => {}).catch(err => {console.log(err);});
    alert("Se agrego al Carrito")
  }

  OnAddCartE(img:string, titulo:string, precio:string, docID:string){
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: img,
    }
    this.afs.doc(`cart/${this.ipAddress}/`).collection(this.ipAddress).add(newProject)
    this.afs.doc(`build/${this.ipAddress}/`).collection(`${this.ipAddress}`).doc(this.projects[docID].Product_id).delete().then(() => {}).catch(err => {console.log(err);});
    alert("Se agrego al Carrito")
    this.router.navigate(['/resumen2']);
  }


}
export interface ProductInterface {
  title?: string;
  galleryURL?: string;
  price?: number;
} 