import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  drawer!: any
  topBar!: any;
  circles: any;
  circleContainer: any;
  ngAfterViewInit(): void {
    this.circleContainer = document.querySelector(".cursor-container");
    this.circles = document.querySelectorAll(".custom-cursor");
    this.topBar = document.querySelector('mat-toolbar');
    this.drawer = document.querySelector('mat-drawer');
    setInterval(() => {
      (this.circleContainer as HTMLElement).style.opacity = (this.circleContainer as HTMLElement).style.opacity as any > 0 ? `${(this.circleContainer as HTMLElement).style.opacity as any - 0.1
        }` : "0"
    }, 100)
  }

  onMouseMove(e: any) {
    (this.circleContainer as HTMLElement).style.opacity = '1'
    this.circles.forEach((circle: any, index: number) => {
      setTimeout(() => {
        (circle as HTMLElement).style.left = `${e.clientX - (circle.clientWidth / 2) - 200}px`;
        (circle as HTMLElement).style.top = `${e.clientY - (circle.clientHeight / 2) - this.topBar?.clientHeight}px`;
      }, index * 30);
    });
  }
}
