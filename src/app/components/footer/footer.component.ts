import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faLaptop = faLaptopCode;
  currentYear = ""
  constructor() { }

  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear().toString()
  }

}
