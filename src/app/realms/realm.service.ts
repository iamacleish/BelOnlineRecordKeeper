import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Realm } from '../realm';
import { User } from '../user';

@Injectable()
export class RealmService {
  private dbRealmUrl = 'api/realms'; //url to webapi
  private dbMemberUrl = 'api/users';
  constructor(
    private http: Http
  ) { }

  getRealms(): Promise <Realm[]>{
    return this.http.get(this.dbRealmUrl)
               .toPromise()
               .then(response => response.json().data as Realm[])
               .catch(this.handleError);
  }

  getRealm(id: number): Promise<Realm>{

    return this.getRealms().then(realms => realms.find(realm=> realm.id === id));
  }

  getRealmMembers(): Promise <User[]>{
    return this.http.get(this.dbMemberUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);

  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error );
  }
}
