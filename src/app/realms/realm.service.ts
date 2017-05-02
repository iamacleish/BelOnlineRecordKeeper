import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Realm } from '../realm';

@Injectable()
export class RealmService {
  private dbUrl = 'api/realms'; //url to webapi
  constructor(
    private http: Http
  ) { }
 
  getRealms(): Promise <Realm[]>{
    return this.http.get(this.dbUrl)
               .toPromise()
               .then(response => response.json().data as Realm[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error );
  }
}
