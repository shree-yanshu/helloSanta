import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyagainpage',
  templateUrl: './buyagainpage.component.html',
  styleUrls: ['./buyagainpage.component.css']
})
export class BuyagainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"ArtWork Product",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
      "price":"2300",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"ArtWork Product",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
      "price":"2300",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"ArtWork Product",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
      "price":"2300",
    },
  ]
}
