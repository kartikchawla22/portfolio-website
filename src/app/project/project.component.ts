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
      title: "Ride Share",
      name: 'rideShare',
      description: `Now a days everybody needs to go from place to place, but not everybody can have a personal vehical. Taking public transport such as buses can be hectic and taking a taxi can be very expensive.
      We have came up with the solution for this. Ride Share allows the users to share their ride with other users.`,
      details: [
        {
          key: "Role:", value: "Development Lead"
        },
        {
          key: "Technology:", value: "React-Native"
        },
        {
          key: "Fonts:", value: "System"
        },
        {
          key: "Platforms:", value: "Android, iOS"
        }
      ],
      figma: "https://www.figma.com/file/kMuEompTIXboIc5ufASy3F/Ride-Share",
      colorScheme: ["#5cb074", "#015c9a", "#ffffff", "#000000"]
    },
    georgianConnect: {
      imageNames: ['Georgian Connect-01', 'Georgian Connect-02', 'Georgian Connect-03', 'Georgian Connect-04', 'Georgian Connect-05', 'Georgian Connect-06', 'Georgian Connect-07', 'Georgian Connect-08', 'Georgian Connect-09', 'Georgian Connect-10'],
      title: "Georgian Connect",
      name: 'georgianConnect',
      description: `The aim of this project is to enable students to find other Georgian students on the basis of course, location, interests, hometown etc. Students will be able to find other students who are pursuing the same course (senior/junior or classmates) as well as students with the same interests, same location, or hometown from other courses as well.`,
      details: [
        {
          key: "Role:", value: "Development Lead"
        },
        {
          key: "Technology:", value: "React-Native"
        },
        {
          key: "Fonts:", value: "System"
        },
        {
          key: "Platforms:", value: "Android, iOS"
        }
      ],
      figma: "https://www.figma.com/file/23q2ihPV7PBoRCnnAwALOb/Georgian-Connect",
      colorScheme: ["#5cb074", "#015c9a", "#ffffff", "#000000"]
    },
    mathsFun: {
      imageNames: ['Maths Fun-01', 'Maths Fun-02', 'Maths Fun-03', 'Maths Fun-04', 'Maths Fun-05', 'Maths Fun-06', 'Maths Fun-07', 'Maths Fun-08'],
      title: "Maths Fun",
      name: 'mathsFun',
      description: `Solving simple math problems has been a day to day task for everybody since childhood. An average human being encounter simple math problems every day, may it be calculating groceries budget or balancing the account statements. Maths is entangled with our lives, but learning how to do simple calculations has been a tedious task, that\’s why we plan on making maths fun for everybody.`,
      details: [
        {
          key: "Role:", value: "Development Lead"
        },
        {
          key: "Technology:", value: "JAVA"
        },
        {
          key: "Fonts:", value: "System"
        },
        {
          key: "Platforms:", value: "Android"
        }
      ],
      figma: "https://www.figma.com/file/xXyQ28w9WaDtIPDLbwQU97/Maths-fun",
      colorScheme: ["#adf6fd", "#ffffff", "#000000"]
    },
    mathsFunIOS: {
      imageNames: ['Maths Fun-01', 'Maths Fun-02', 'Maths Fun-03', 'Maths Fun-04', 'Maths Fun-05', 'Maths Fun-06', 'Maths Fun-07', 'Maths Fun-08'],
      title: "Maths Fun",
      name: 'mathsFunIOS',
      description: `Solving simple math problems has been a day to day task for everybody since childhood. An average human being encounter simple math problems every day, may it be calculating groceries budget or balancing the account statements. Maths is entangled with our lives, but learning how to do simple calculations has been a tedious task, that\’s why we plan on making maths fun for everybody.`,
      details: [
        {
          key: "Role:", value: "Development Lead"
        },
        {
          key: "Technology:", value: "Swift"
        },
        {
          key: "Fonts:", value: "System"
        },
        {
          key: "Platforms:", value: "iOS"
        }
      ],
      figma: "https://www.figma.com/file/xXyQ28w9WaDtIPDLbwQU97/Maths-fun",
      colorScheme: ["#adf6fd", "#ffffff", "#000000"]
    }
  }
  constructor(private _route: ActivatedRoute) { }


  ngOnInit(): void {
    this._route.url.subscribe(url => {
      this.selectedProject = this.projects[url[url.length - 1].path];
      console.log(this.selectedProject);
    })
  }
  getImageURL(image: string): string {
    return `assets/images/projects/${this.selectedProject.name}/${image}.jpg`
  }
}
