import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"ArtWork Product",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
      "price":"2300",
    },
  ]
  blogs=[
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"A blog to read",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"A blog to read",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"A blog to read",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"A blog to read",
      "description":"Lorem ipsum dolor sit amet, consecteturadipiscing elit. Curabitur cursus tinciduntcommodo. Nunc justo nisi, vestibulum.",
    },
  ]
categories=[
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
  {
    "img":"https://source.unsplash.com/940x650",
    "name":"DigitalArtWork Product",
  },
]
  othercategories=[
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
    {
      "img":"https://source.unsplash.com/940x650",
      "name":"Handmade ArtWork Product",
    },
]
}
