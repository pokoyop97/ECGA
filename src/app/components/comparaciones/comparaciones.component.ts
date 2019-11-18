import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/common/data-api.service';
import { AuthService } from 'src/app/common/auth.service';
import { ProductInterface } from 'src/app/home/home.component';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../models/user'

@Component({
  selector: 'app-comparaciones',
  templateUrl: './comparaciones.component.html',
  styleUrls: ['./comparaciones.component.scss']
})
export class ComparacionesComponent implements OnInit {
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
  };
  
  ipAddress:any;
  logged:boolean;
  private projects: any[];
  constructor(
    private router: Router ,
    private http: HttpClient,
    private dataApi: DataApiService,
    private afs: AngularFirestore,
    private authService:AuthService) { }

    
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
      this.dataApi.getAllproducts("vs",this.ipAddress).subscribe(projects => {
        this.projects = projects;
      });
    }) 
  }

  OnDelVS(docID: string) {
    this.afs
      .doc(`vs/${this.ipAddress}/`)
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
  OnAddCart(img:string, titulo:string, precio:string, modelo:string, docID:string){
    alert("Se agrego al Carrito")
    let newProject = {
      titulo: titulo,
      precio: precio,
      img: img,
      modelo: modelo,
    }
    this.afs.doc(`cart/${this.ipAddress}`).collection(this.ipAddress).add(newProject)
    this.afs.doc(`vs/${this.ipAddress}/`).collection(`${this.ipAddress}`).doc(docID).delete().then(() => {}).catch(err => {console.log(err);});
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }
}

