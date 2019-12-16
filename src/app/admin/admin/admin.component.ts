import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/common/data-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public projects: any[];
  constructor(private dataApi : DataApiService) { }

  ngOnInit() {
    this.dataApi.getAllproductsAdmin("admin").subscribe(projects =>{
      this.projects = projects;
      console.log(this.projects)
  }
}

}
