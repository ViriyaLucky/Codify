import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comment') comment!: Comment;
  publishDate:any;
  constructor(public datepipe: DatePipe,private router: Router) { 
  }

  ngOnInit(): void {
    this.publishDate =this.datepipe.transform(this.comment?.publishDate, 'medium');
    }
  showUserProfile(id:string){
    window.scroll(0,0);
    this.router.navigate(['user', id]);
  }
}
