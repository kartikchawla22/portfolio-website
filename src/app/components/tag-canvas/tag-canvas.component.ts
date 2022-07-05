import { AfterViewInit, Component } from '@angular/core';
import { Tag } from 'ng-tagcanvas';

@Component({
  selector: 'app-tag-canvas',
  templateUrl: './tag-canvas.component.html',
  styleUrls: ['./tag-canvas.component.scss']
})
export class TagCanvasComponent implements AfterViewInit {
  topBar!: any;
  tags: Tag[] = [
    { weight: 30, text: 'insurance' },
    { weight: 30, text: 'lay' },
    { weight: 30, text: 'tense' },
    { weight: 30, text: 'cabin' },
    { weight: 30, text: 'bomb' },
    { weight: 30, text: 'broadcast' },
    { weight: 30, text: 'portion' },
    { weight: 30, text: 'progress' },
    { weight: 30, text: 'match' },
    { weight: 30, text: 'cover' }
  ];
  options: TagCanvasOptions = {
    weight: true,
    outlineColour: "transparent",
    initial: [0.1, 0],
    shuffleTags: true,
    minSpeed: 10,
    pinchZoom: false,
    wheelZoom: false
  };
  tagClicked(tag: any) {
    console.log(tag);
  }

  ngAfterViewInit(): void {
    this.topBar = document.querySelector('mat-toolbar');
    const canvas = document.querySelector('tag-canvas > canvas') as any;
    canvas.width = '500';
    canvas.height = '500';
  }
}
