import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
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
    let headers = new HttpHeaders()
          .set("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, HEAD, OPTIONS")
          .set("Access-Control-Allow-Origin","*")
          .set('Content-Encoding','gzip')
          .set('Content-Type','text/plain;charset=UTF-8')
          .set('Server','Apache-Coyote/1.1')
          .set('X-EBAY-SOA-LOCALE-LIST','en-US_US')
          .set("X-EBAY-SOA-OPERATION-NAME","findItemsByKeywords")
          .set('X-EBAY-SOA-REQUEST-ID','16e70003-08b0-a9cb-2aa6-7ea6fff81bd4')
          .set('X-EBAY-SOA-RESPONSE-DATA-FORMAT','JSON')
          .set('X-EBAY-SOA-SERVICE-METRICS','290818700')
          .set('X-EBAY-SOA-SERVICE-NAME','{http://www.ebay.com/marketplace/search/v1/services}FindingService')
          .set('X-EBAY-SOA-SERVICE-VERSION','1.13.0')
        /* Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS
        Access-Control-Allow-Origin: *
        Content-Encoding: gzip
        Content-Type: text/plain;charset=UTF-8
        Date: Fri, 15 Nov 2019 16:58:10 GMT
        Server: Apache-Coyote/1.1
        Transfer-Encoding: chunked
        X-EBAY-SOA-LOCALE-LIST: en-US_US
        X-EBAY-SOA-MESSAGE-PROTOCOL: NONE
        X-EBAY-SOA-OPERATION-NAME: findItemsByKeywords
        X-EBAY-SOA-REQUEST-ID: 16e70003-08b0-a9cb-2aa6-7ea6fff81bd4
        X-EBAY-SOA-RESPONSE-DATA-FORMAT: JSON
        X-EBAY-SOA-SERVICE-METRICS: 290818700
        X-EBAY-SOA-SERVICE-NAME: {http://www.ebay.com/marketplace/search/v1/services}FindingService
        X-EBAY-SOA-SERVICE-VERSION: 1.13.0 
        
        " --header Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS --header Access-Control-Allow-Origin: *  --header Content-Encoding: gzip  --header Content-Type: text/plain;charset=UTF-8  --header Server: Apache-Coyote/1.1  --header X-EBAY-SOA-LOCALE-LIST: en-US_US;es-ES,es;q=0.9,en;q=0.8,ru;q=0.7  --header X-EBAY-SOA-OPERATION-NAME: findItemsByKeywords  --header X-EBAY-SOA-REQUEST-ID: 16e70003-08b0-a9cb-2aa6-7ea6fff81bd4"
        */
       console.log(environment.baseUrlE + id)
    return this.httpClient.get(environment.baseUrlE + id ).pipe( tap( res => {
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