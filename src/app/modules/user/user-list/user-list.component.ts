import { Component, OnInit } from '@angular/core';
import { DummyServiceService } from 'src/app/services/dummy-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private ds:DummyServiceService) { }

  ngOnInit(): void {
    this.ds.getUsersList()// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let userList = body.data
      userList.forEach((element: any) => {
          console.log(element);
        });
    });
  }

}
