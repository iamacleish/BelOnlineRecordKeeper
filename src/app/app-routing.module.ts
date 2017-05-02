import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealmsComponent } from './realms/realms.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CountriesComponent } from './countries/countries.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
  {  path: 'welcome',  component: WelcomeComponent},
  {  path: 'countries',  component: CountriesComponent  },
  {  path: 'realms',  component: RealmsComponent  },
  {  path: 'users',  component: UsersComponent  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
