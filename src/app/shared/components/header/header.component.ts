import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome(){
    window.scroll(0,0);
    this.router.navigate(["home"]);
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
}
