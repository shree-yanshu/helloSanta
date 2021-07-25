import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() activeLinkID : string;

  constructor() {
    this.activeLinkID = '';
  }

  ngOnInit(): void {
    if(this.activeLinkID.length > 0) {
      const listItem = document.getElementById(this.activeLinkID);
      listItem?.classList.add('active');
    }
  }

}
