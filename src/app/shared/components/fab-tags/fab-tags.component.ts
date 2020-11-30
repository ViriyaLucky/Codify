import { Component, OnInit } from '@angular/core';
import {  MatDialog } from "@angular/material/dialog";
import { TagModalComponent } from '../tag-modal/tag-modal.component';


@Component({
  selector: 'app-fab-tags',
  templateUrl: './fab-tags.component.html',
  styleUrls: ['./fab-tags.component.css']
})
export class FabTagsComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TagModalComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
