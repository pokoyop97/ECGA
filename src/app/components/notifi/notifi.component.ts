import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/common/data-api.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.css']
})
export class NotifiComponent implements OnInit {

  
  public projects: any[];
  constructor(private dataApi : DataApiService,private afs: AngularFirestore) { }

  ngOnInit() {
    this.dataApi.getAllproductsAdmin("notifi").subscribe(projects =>{
      this.projects = projects;
      console.log(this.projects)
  })
}
  confirmar(titulo: string,pedido:string){
    let newProject = {
      titulo: titulo,
      pedido: pedido,
    }
    this.afs.doc(`notificaciones/${pedido}`).collection(pedido).add(newProject);
  }

}
