import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-handmadeartworkspage',
  templateUrl: './handmadeartworkspage.component.html',
  styleUrls: ['./handmadeartworkspage.component.css']
})
export class HandmadeartworkspageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  products=[1,2,3,4,5,6,7,8,9]

}
