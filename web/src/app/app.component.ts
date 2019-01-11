import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: []
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log("currentUser from appComponent:");
    console.log(localStorage.getItem('currentUser'));
  }
}
