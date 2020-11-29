import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { User } from 'src/app/shared/models/user.model';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  ngOnInit(): void {
    this.getUsers();
   
  }
  isLoading:boolean = true;
  userId:string | null = '';
  userList: User[]=[];
  constructor( private router: Router, private route: ActivatedRoute,private ds:DummyServiceService
) { }

 
  getUsers(){
    this.ds.getUsersList()// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let users = body.data
      users.forEach((element: any) => {
        let stat = new User().deserialize(element);
        this.userList.push(stat);
        });
        this.isLoading = false;
    });
  }
}
