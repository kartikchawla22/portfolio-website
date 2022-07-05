import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './utils/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeTransitionAnimations
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  links = [
    {
      name: 'github',
      image: 'assets/images/logo/github.png',
      url: 'https://github.com/kartikchawla22/',
      class: 'two'
    },
    {
      name: 'linkedin',
      image: 'assets/images/logo/linkedin.png',
      url: 'https://www.linkedin.com/in/kartik-chawla-b51ba5118/',
      class: 'three'
    },
    {
      name: 'email',
      image: 'assets/images/logo/email.png',
      url: 'mailto:kchawla1995@gmail.com',
      class: 'four'
    },
    {
      name: 'resume',
      image: 'assets/images/logo/experience.png',
      url: 'assets/documents/resume.pdf',
      class: 'five'
    }
  ]
  constructor(private _breakpointObserver$: BreakpointObserver) { }
  ngAfterViewInit(): void {
    this._breakpointObserver$.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
    });
  }
  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}