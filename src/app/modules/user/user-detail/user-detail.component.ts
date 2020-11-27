import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId:string | null = '';
  userDetail: User = new User;
  constructor( private router: Router, private route: ActivatedRoute,private ds:DummyServiceService
) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.userId = params.get('id');
        console.log(this.userId)
      }
    )
    this.userId = this.route.snapshot.paramMap.get("id") ;
    console.log(this.userId)
    this.getUserDetail();
  }

  getUserDetail(){
    this.ds.getUserProfile(this.userId ? this.userId : "").subscribe(resp => {
      const body = { ... resp.body };
      this.userDetail = this.userDetail.deserialize(body);
      console.log(this.userDetail);
    });
  }
  uppercaseLetter(text:string){
    if (!text) return text;
    return text[0].toUpperCase() + text.substr(1).toLowerCase(); 
  }
  showUserPosts(){
    window.scroll(0,0);
    this.router.navigate(['user', this.userId ,"posts"]);
  }
}
