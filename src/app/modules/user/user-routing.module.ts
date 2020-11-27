import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'user-list'

   },
  {
    path: ':id',
    component: UserDetailComponent
   },
   {
    path: 'user-list',
    component:UserListComponent
   },
   {
    path: ':id/posts',
    component:UserPostsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
