import { Injectable, ɵConsole } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) { 
    this.UserCollection = afs.collection<UserInterface>('users');
    this.users = this.UserCollection.valueChanges();
  }
  private UserCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;
  private userDoc: AngularFirestoreDocument<UserInterface>;

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
}
