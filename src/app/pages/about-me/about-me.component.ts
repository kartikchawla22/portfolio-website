import { AfterContentInit, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {


    let angular = document.querySelector('.angular') as HTMLElement;
    let nodejs = document.querySelector('.nodejs') as HTMLElement;
    let mongo = document.querySelector('.mongo') as HTMLElement;
    let reactjs = document.querySelector('.reactjs') as HTMLElement;
    let reactNative = document.querySelector('.react-native') as HTMLElement;
    let javascript = document.querySelector('.javascript') as HTMLElement;
    setTimeout(() => {
      javascript.style.width = "95%";
      angular.style.width = "90%";
      nodejs.style.width = "80%";
      mongo.style.width = "80%";
      reactjs.style.width = "50%";
      reactNative.style.width = "50%";
    })
  }
}
