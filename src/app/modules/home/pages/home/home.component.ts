import { Component, OnInit, HostListener, Inject  } from '@angular/core';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { Post } from 'src/app/shared/models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  newList:Post[] = [];
  isRequestingData:boolean = true;
  category:string = "";
  prevCategory : string = "";
  pages=0;
  doneRequest:boolean = false;

  constructor( private route: ActivatedRoute,     
    private router: Router, 
    private ds:DummyServiceService) {
  
  }

  //when reach bottom, get next batch of post
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos == max || pos > max-30 )   {
        //check if currently still requesting data, to prevent multiple request
      if(this.isRequestingData){

      }else{
        if( this.doneRequest){

        }else{
          this.getPostList();

        }
      }

    }
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(
        (params) => {
          //check if there is change in category parameter
          this.category = params['category'];

          //if there is change, reset list
          if(this.prevCategory != this.category){
            this.newList = [];
            this.pages = 0;
            window.scroll(0,0);
            this.getPostList();
          }else{
            this.prevCategory = this.category;
            this.getPostList();
          }
        }
      )
    }

  //call service to get post list and set flag isRequestingData to true
  getPostList(){
    if(this.doneRequest){

    }else{
      this.isRequestingData = true;
      this.ds.getPostList(this.pages, this.category)// resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        const body = { ... resp.body };
        let postList = body.data;
        console.log(postList);
        if(postList.length < 1){
          this.doneRequest=true;
        }else{
          postList.forEach((element: any) => {
            let stat = new Post().deserialize(element);
            this.newList.push(stat);
            });
        }
        this.pages++;
        this.isRequestingData = false;
      });
    }
  }
  
  //when choose category, reset list and page
  onCategoryClicked($event:string){
      this.category = $event;
      this.newList = [];
      this.pages = 0;
      window.scroll(0,0);
      this.doneRequest=false;
      this.getPostList();
  }

  //reset category
  goHome(){
    this.newList = [];
    this.category = "";
    this.pages = 0;
    window.scroll(0,0);
    this.getPostList();
  }


}
