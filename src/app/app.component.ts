import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSideBar = false;

  onShowSideBarChange(event) {
    this.showHideSideBar = event;
  }
}
