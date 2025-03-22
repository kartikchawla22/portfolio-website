import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './utils/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  constructor(private _breakpointObserver$: BreakpointObserver) {}
  ngAfterViewInit(): void {
    // this._breakpointObserver$.observe(['(max-width: 800px)']).subscribe((res) => {
    //   if (res.matches) {
    //     this.drawer.mode = 'over';
    //     this.drawer.close();
    //   } else {
    //     this.drawer.mode = 'side';
    //     this.drawer.open();
    //   }
    // });
  }
  prepareRoute(outlet: RouterOutlet): boolean {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
