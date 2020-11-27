import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { PostcardComponent } from 'src/app/shared/components/postcard/postcard.component';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [HomeComponent,HeaderComponent, PostcardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    ScrollingModule  ],
    providers:[DatePipe]
})
export class HomeModule { }
