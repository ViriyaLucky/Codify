import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input("user") userDetail!:User;
  @Input("userId") userId!:string;

  isLoading:boolean = true;
  constructor( private router: Router, private route: ActivatedRoute,private ds:DummyServiceService
) { }

  ngOnInit(): void {
   
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
