import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor( private httpClient: HttpClient ) { };

  getItemML( id: string ): Observable<any> {
    return this.httpClient.get(environment.baseUrlML + 'sites/MLM/search?q=' + id + '&category=MLM1648').pipe( tap( res => {
       //console.log( 'Get Item Response:', res );
    } ) );
  }
  getItemE( id: string ): Observable<any> {
    return this.httpClient.get(environment.baseUrlE + id).pipe( tap( res => {
       console.log( 'Get Item Response:', res );
    } ) );
  }
}

export interface IQuery {
  query?: string,
  page?: number,
  sortBy?: string,
  listType?: string,
  category?: string,
  condition?: string
}