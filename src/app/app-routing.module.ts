import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},  
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
   },
   {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
   },
   {
    path: 'post',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
   },
   {
    path: 'about',
    component:AboutComponent
   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
