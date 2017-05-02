import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Realm } from '../realm';
import { RealmService } from './realm.service';

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

}
