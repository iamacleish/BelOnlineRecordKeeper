import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Realm } from '../../realm';
import { User } from '../../user';
import { RealmService } from '../realm.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-realm-members',
  templateUrl: './realm-members.component.html',
  styleUrls: ['./realm-members.component.scss']
})
export class RealmMembersComponent implements OnInit {
  realm: Realm;
  realmMembers: User[];

  constructor(
    private realmService: RealmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.realmService.getRealm(+params['id']))
    .subscribe(realm => this.realm = realm);

    this.realmService.getRealmMembers().then(members => this.realmMembers = members.filter(member =>  member.realm_id === this.realm.id ));
  }



}
