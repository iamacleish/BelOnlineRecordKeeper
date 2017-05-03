import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Realm } from '../realm';
import { RealmService } from './realm.service';
import { RealmMembersComponent } from  "./realm-members/realm-members.component";

@Component({
  selector: 'app-realms',
  templateUrl: './realms.component.html',
  styleUrls: ['./realms.component.scss']
})

export class RealmsComponent implements OnInit {
  realms: Realm[];

  constructor(
    private realmService: RealmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRealms();
  }


  getRealms(): void {
    this.realmService.getRealms().then(realms => this.realms = realms);
  }

  gotoDetail(realm: Realm): void {

    let link = ['/realmMembers', realm.id];
    this.router.navigate(link);
}

}
