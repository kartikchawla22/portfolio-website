import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}
  jobs = [
    {
      heading: 'Senior Sofware Engineer',
      organisation: 'EPAM Systems',
      duration: 'April 2021 - April 2022',
      rolesAndResponsibilities: [
        'Developed CDX library for smooth integration among multiple products',
        'Created seamless UI for multiple projects using Angular(2+).',
        'Used Angular Material to build responsive web applications.',
        'Build Lambda functions using Node JS.',
        'Helped in building a strong UI Team by taking multiple interviews.',
      ],
    },
    {
      heading: 'MEAN Stack Developer',
      organisation: 'Kellton Tech Solutions Ltd.',
      duration: 'Feb 2017 - April 2021',
      rolesAndResponsibilities: [
        'Developed and Shipped many JavaScript based products.',
        'Communicated with multiple clients directly for requirement gathering and development.',
        'Managed multiple teams as a lead.',
        'Worked on Multiple projects simultaneously in different time zones (UK and US), as a single resource.',
        'Setup AGILE methodology in a project acting as SCRUM Master and organising all AGILE meetings (Goorming/Planning/Retrospective).',
      ],
    },
  ];
  ngOnInit(): void {}
}
