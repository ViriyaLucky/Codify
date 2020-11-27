import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'post-card',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input('post') post?: Post;

  publishDate:any;
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    let date;
    this.publishDate =this.datepipe.transform(this.post?.publishDate, 'medium');
    console.log(this.publishDate);
  }

}
