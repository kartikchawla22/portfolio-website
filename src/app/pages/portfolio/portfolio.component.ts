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
      thumbnail: 'assets/images/logo/Logo.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
