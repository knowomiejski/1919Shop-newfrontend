import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: 'assets/images/guitar_home.jpg'},
    {img: 'assets/images/guitar_home1.jpg'},
    {img: 'assets/images/guitar_home2.jpg'},
    {img: 'assets/images/guitar_home3.jpg'},
    {img: 'assets/images/guitar_home4.jpg'}
  ];

  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': false,
    'autoplay': true,
    'autoplaySpeed': 3000,
    'mobileFirst': true,
    'responsive': {
      breakpoint: 300,
      settings: 'width: 10%' // destroys slick
      }
  };


  constructor() {
  }

  ngOnInit() {
  }


}
