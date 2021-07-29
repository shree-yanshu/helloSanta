import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlistpage',
  templateUrl: './wishlistpage.component.html',
  styleUrls: ['./wishlistpage.component.css']
})
export class WishlistpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  orders=[
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
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"ArtWork Product",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
      "price":"2300",
    },
  ]
}
