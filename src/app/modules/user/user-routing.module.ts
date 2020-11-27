import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'

   },
  {
    path: 'home/:id',
    component:HomeComponent
   },
   {
    path: 'user-list',
    component:UserListComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
