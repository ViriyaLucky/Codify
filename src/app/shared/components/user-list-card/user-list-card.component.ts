import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.css']
})
export class UserListCardComponent implements OnInit {
  @Input("user") userDetail!:User;
  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }
  showUserPosts(){
    window.scroll(0,0);
    this.router.navigate(['user', this.userDetail.id ,"posts"]);
  }
  showUserProfile(){
    window.scroll(0,0);
    this.router.navigate(['user', this.userDetail.id]);
  }
  uppercaseLetter(text:string){
    if (!text) return text;
    return text[0].toUpperCase() + text.substr(1).toLowerCase(); 
  }
}
