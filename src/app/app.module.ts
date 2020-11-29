import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/modules/material/material.module';
import { SharedModuleModule } from './shared/modules/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    PostModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    MaterialModule,
    SharedModuleModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
