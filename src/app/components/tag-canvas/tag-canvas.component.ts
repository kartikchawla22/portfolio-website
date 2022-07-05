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
    { weight: 30, text: 'Angular 2+' },
    { weight: 30, text: 'Node.JS' },
    { weight: 30, text: 'JavaScript' },
    { weight: 30, text: 'Mongo' },
    { weight: 30, text: 'Express' },
    { weight: 30, text: 'NPM' },
    { weight: 30, text: 'GIT' },
    { weight: 30, text: 'JIRA' },
    { weight: 30, text: 'JSON' },
    { weight: 30, text: 'React-Native' },
    { weight: 30, text: 'React.JS' },
    { weight: 30, text: 'Swift 5' },
    { weight: 30, text: 'Kotlin' },
    { weight: 30, text: 'iOS' },
    { weight: 30, text: 'Android' },
    { weight: 30, text: 'JAVA' },
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
