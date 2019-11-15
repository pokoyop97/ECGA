import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  
  constructor( private httpClient: HttpClient ) { };

  getItemML( id: string ): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS')
    .set('Allow','GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS');
    return this.httpClient.get(environment.baseUrlML + 'sites/MLM/search?q=' + id + '&category=MLM1648', {headers: headers}).pipe( tap( res => {
       //console.log( 'Get Item Response:', res );
    } ) );
  }
  getItemE( id: string ): Observable<any> {
    let headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin')
        .set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE, HEAD')
        .set('Allow','GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS');
    return this.httpClient.get(environment.baseUrlE + id, {headers: headers}).pipe( tap( res => {
       //console.log( 'Get Item Response:', res );
       
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