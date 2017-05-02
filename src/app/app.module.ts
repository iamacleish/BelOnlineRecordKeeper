import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RealmsComponent } from './realms/realms.component';

import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { UsersComponent } from './users/users.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RealmService } from './realms/realm.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RealmsComponent,
    CountriesComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [RealmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
