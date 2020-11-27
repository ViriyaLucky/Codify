import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PostcardComponent } from '../../components/postcard/postcard.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HeaderComponent, PostcardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ HeaderComponent, PostcardComponent, MaterialModule],

})
export class SharedModuleModule { }
