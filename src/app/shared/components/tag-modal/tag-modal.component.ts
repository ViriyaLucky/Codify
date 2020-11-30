import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from  "@angular/material/dialog";
import { Router } from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { Tag } from '../../models/tag.model';



@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.component.html',
  styleUrls: ['./tag-modal.component.css']
})
export class TagModalComponent implements OnInit {
  isRequestingData = false;
  tagList: Tag[]=[];
  constructor(
    public dialogRef: MatDialogRef<TagModalComponent>,
    private ds:DummyServiceService,
    private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  tagClick(event:any){
    this.router.navigate(['/home'], { queryParams:{"category": event} });

  }

  ngOnInit() {
    this.getTagList()
  }
  //call service to get post list and set flag isRequestingData to true
  getTagList(){
    this.isRequestingData = true;
    this.ds.getTagList()// resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      const body = { ... resp.body };
      let postList = body.data;
      postList.forEach((element: any) => {
        let stat = new Tag(element);
        this.tagList.push(stat);
        });
      this.isRequestingData = false;
    });

  }
}
