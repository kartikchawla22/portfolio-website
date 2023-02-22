import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // projects = [
  //   {
  //     name: 'Ride Share',
  //     link: 'rideShare',
  //     thumbnail: 'assets/images/logo/rideShareLogo.png'
  //   },
  //   {
  //     name: 'Georgian Connect',
  //     link: 'georgianConnect',
  //     thumbnail: 'assets/images/logo/georgianConnectLogo.png'
  //   },
  //   {
  //     name: 'Maths Fun',
  //     link: 'mathsFun',
  //     thumbnail: 'assets/images/logo/mathsFun.png'
  //   },
  //   {
  //     name: 'Maths Fun',
  //     link: 'mathsFunIOS',
  //     thumbnail: 'assets/images/logo/mathsFun.png'
  //   }
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}