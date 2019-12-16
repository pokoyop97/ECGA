import { Injectable, ɵConsole } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  
  public UserCollection: AngularFirestoreCollection<UserInterface>;
  public users: Observable<UserInterface[]>;
  public userDoc: AngularFirestoreDocument<UserInterface>;
  public productsCollection: AngularFirestoreCollection<ProductInterface>;
  public products: Observable<ProductInterface[]>;
  public itemsCollection: AngularFirestoreCollection<any>;
  
  constructor(private afs: AngularFirestore) { /* 
    this.users = this.UserCollection.valueChanges();
    this.products = this.productsCollection.valueChanges();  */
    this.productsCollection = afs.collection<ProductInterface>('products');
    this.UserCollection = afs.collection<UserInterface>('users');
  }

  addUser(user: UserInterface): void {
    this.UserCollection.add(user);
  }
  updateUser(user: UserInterface): void {
    let idUser = user.User_id;
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.update(user);
  }
  deleteUser(idUser: string): void {
    this.userDoc = this.afs.doc<UserInterface>(`users/${idUser}`);
    this.userDoc.delete();
  }

  obtenerColeccionDeDocumento(nombreColeccion:string,idDocumento:string){
    this.itemsCollection = this.afs.collection<any>(`${nombreColeccion}/${idDocumento}`);
    return this.itemsCollection.snapshotChanges();
  }

  public getAllproducts(tipo:string,id: string){
    this.productsCollection = this.afs.collection<ProductInterface>(tipo+`/`+id+`/`+id);
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map( action=>{
      const data = action.payload.doc.data() as ProductInterface;
      data.Product_id = action.payload.doc.id;
      return data;
    });
  }));
  }
  public getAllproductsAdmin(tipo:string){
    this.productsCollection = this.afs.collection<ProductInterface>(tipo+`/`+tipo+`/`+tipo);
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map( action=>{
      const data = action.payload.doc.data() as ProductInterface;
      data.Product_id = action.payload.doc.id;
      return data;
    });
  }));
  }
}