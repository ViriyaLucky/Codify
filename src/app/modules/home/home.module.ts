import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule,
    MaterialModule
    ],
    providers:[DatePipe]
})
export class HomeModule { }
