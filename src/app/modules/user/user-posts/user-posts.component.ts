import { Component, OnInit, HostListener  } from '@angular/core';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { Post } from 'src/app/shared/models/post.model';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'user-postsss',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit  {

  newList:Post[] = [];
  isRequestingData:boolean = false;
  category:string = "";
  pages=0;
  userId:string | null = '';
  constructor(private route: ActivatedRoute,private ds:DummyServiceService) {
  
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos == max || pos > max-30 )   {
        //Do your action here
      if(this.isRequestingData){

      }else{
        this.getPostList();

      }
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.userId = params.get('id');
        // console.log(this.userId)
      }
    )
    this.userId = this.route.snapshot.paramMap.get("id") ;
    this.getPostList();
  }
  getPostList(){
    console.log(this.newList.length);
    this.isRequestingData = true;
    this.ds.getUserPost(this.pages, this.userId)// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let postList = body.data;
      postList.forEach((element: any) => {
        let stat = new Post().deserialize(element);
        this.newList.push(stat);
        });
      this.pages++;
      this.isRequestingData = false;
      // console.log(this.newList);
    });

  }
  onCategoryClicked($event:string){
      console.log($event);
      this.category = $event;
      this.newList = [];
      this.pages = 0;
      window.scroll(0,0);
      this.getPostList();
  }
}
