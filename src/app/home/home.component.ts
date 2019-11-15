import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { Observable } from "rxjs/internal/Observable";

@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
  public item: string;
  public info: Observable<ProductInterface[]>;
  searchForm = new FormGroup( {
    query: new FormControl( '' )
  } );

  categories: Map<string, string[]>;
  constructor( private router: Router , private apiService: ApiService) { }

  onSubmit(id: string) {
    this.item = this.searchForm.value.query;
    if(this.item != ''){
      this.apiService.getItemML(this.item).subscribe( res => {
        this.info = res.results;
      });
      this.apiService.getItemE(this.item).subscribe( res => {
        console.log(res)
      });
    }else{
      alert("Ingrese un elemento para buscar")
    }
  }

  ngOnInit() {
  }
}
export interface ProductInterface {
  name?: string;
  img?:string;
  precio?: string;
}