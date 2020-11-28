import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PostcardComponent } from '../../components/postcard/postcard.component';
import { MaterialModule } from '../material/material.module';
import { CommentComponent } from '../../components/comment/comment.component';



@NgModule({
  declarations: [HeaderComponent, PostcardComponent, CommentComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ HeaderComponent, PostcardComponent, MaterialModule, CommentComponent],

})
export class SharedModuleModule { }
