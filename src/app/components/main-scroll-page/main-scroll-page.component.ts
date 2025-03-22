import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-main-scroll-page',
  templateUrl: './main-scroll-page.component.html',
  styleUrls: ['./main-scroll-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainScrollPageComponent implements OnInit {
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let scroll: number = window.scrollY;
    let zoomElements: HTMLCollectionOf<Element> =
      document.getElementsByClassName('zoom');

    for (let i = 0; i < zoomElements.length; i++) {
      let zoomElement: HTMLElement = zoomElements[i] as HTMLElement;
      zoomElement.style.backgroundSize = 100 + scroll / 5 + '%';
      zoomElement.style.top = -(scroll / 10) + '%';
    }
  }
  ngOnInit(): void {}
}
