import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PostcardComponent } from '../../components/postcard/postcard.component';
import { MaterialModule } from '../material/material.module';
import { CommentComponent } from '../../components/comment/comment.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavListComponent } from '../../components/sidenav-list/sidenav-list.component';
import { RouterModule } from '@angular/router';
import { UsercardComponent } from '../../components/usercard/usercard.component';
import { UserListCardComponent } from '../../components/user-list-card/user-list-card.component';



@NgModule({
  declarations: [HeaderComponent, PostcardComponent, CommentComponent,     SidenavListComponent, UsercardComponent,UserListCardComponent  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule 
  ],
  exports: [ HeaderComponent, PostcardComponent, MaterialModule, CommentComponent,FlexLayoutModule, SidenavListComponent,UserListCardComponent, RouterModule, UsercardComponent],

})
export class SharedModuleModule { }
