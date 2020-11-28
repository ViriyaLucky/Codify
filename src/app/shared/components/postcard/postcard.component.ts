import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { DatePipe } from '@angular/common';
import { Tag } from '../../models/tag.model';
import { Router} from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'post-card',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input('post') post!: Post;
  @Output() categoryClicked = new EventEmitter<string>();

  comments:Comment[] = []
  tags:Tag[] | undefined = [];
  publishDate:any;
  showComment:boolean=false;
  isLoadingComment:boolean=false;
  commentPage=0;


  constructor(public datepipe: DatePipe,private router: Router, private ds:DummyServiceService ) { }

  ngOnInit(): void {
    this.publishDate =this.datepipe.transform(this.post?.publishDate, 'medium');
    this.tags = this.post?.tags;
  }
  chooseCategory(category:string): void { this.categoryClicked.emit(category); }

  showUserProfile(id:string){
    window.scroll(0,0);
    this.router.navigate(['user', id]);
  }
  showComments(){
    if(this.showComment){
      this.showComment = false;
    }else{
      this.isLoadingComment = true;
      this.comments = [];
      this.ds.getCommentsList(this.post.id)// resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        const body = { ... resp.body };
        let postList = body.data;
        postList.forEach((element: any) => {
          let stat = new Comment().deserialize(element);
          this.comments.push(stat);
        });
        this.isLoadingComment = false;
        this.showComment = true;
      });
    } 
  }
}
