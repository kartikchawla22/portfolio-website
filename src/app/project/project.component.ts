import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  selectedProject: any;
  projects: any = {
    rideShare: {
      imageNames: ['Ride Share-01', 'Ride Share-02', 'Ride Share-03', 'Ride Share-04', 'Ride Share-05', 'Ride Share-06', 'Ride Share-07', 'Ride Share-08', 'Ride Share-09', 'Ride Share-10', 'Ride Share-11', 'Ride Share-12', 'Ride Share-13'],
      figmaLink: '',
      title: "Ride Share",
      name: 'rideShare'
    }
  }
  constructor(private _route: ActivatedRoute) { }


  ngOnInit(): void {
    this._route.url.subscribe(url => {
      this.selectedProject = this.projects[url[url.length - 1].path];
      console.log(this.selectedProject);
    })
  }
  getImageURL(design: string, image: string): string {
    return `assets/images/projects/${this.selectedProject.name}/${design}/${image}.jpg`
  }
}
