import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      name: 'Ride Share',
      link: 'rideShare',
      thumbnail: 'https://source.unsplash.com/random/320x240'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
