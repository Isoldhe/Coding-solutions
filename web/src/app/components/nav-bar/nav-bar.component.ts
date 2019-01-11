import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(public navBar: NavBarService) { }

  ngOnInit() {
  }

}