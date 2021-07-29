import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blogsingalpage',
  templateUrl: './blogsingalpage.component.html',
  styleUrls: ['./blogsingalpage.component.css']
})
export class BlogsingalpageComponent implements OnInit {
  @Input() blogimg:string ="https://source.unsplash.com/940x650"
  @Input() blogdate:string =  "Date:12/06/2003"
  @Input() blogtitle:string =  "Creativity is nothing but creativity yeah that's it."

  constructor() { }

  ngOnInit(): void {
  }
}
