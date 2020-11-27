import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { DatePipe } from '@angular/common';
import { Tag } from '../../models/tag.model';
import { Router} from '@angular/router';

@Component({
  selector: 'post-card',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input('post') post!: Post;
  @Output() categoryClicked = new EventEmitter<string>();

  tags:Tag[] | undefined = [];
  publishDate:any;
  constructor(public datepipe: DatePipe,private router: Router  ) { }

  ngOnInit(): void {
    this.publishDate =this.datepipe.transform(this.post?.publishDate, 'medium');
    this.tags = this.post?.tags;
    console.log(this.post);
  }
  chooseCategory(category:string): void { this.categoryClicked.emit(category); }

  showUserProfile(id:string){
    console.log(id);
    window.scroll(0,0);
    this.router.navigate(['user', id]);
  }
}
