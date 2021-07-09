import {Component, ViewChild} from '@angular/core';
import {IonContent} from "@ionic/angular";
import { IProject } from '../interfaces/IProject';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('IonContent') ionContent: IonContent;

  projects: IProject[] = [
    { name: 'Wirecard Enterprise Payment Wrapper',
      description: 'The original API uses XML and SOAP for communication, making it hard to implement with JavaScript since in JavaScript we are mostly familiar with JSON, this package does the heavy lifting so you can focus more on your project.',
      image: 'wirecard-enterprise.png',
      languages: ['Node.JS', 'Git', 'Rest API'],
      href: 'https://github.com/lebyanelm/wirecard-enterprise'
    }
  ];
  experimentsLoaded = this.projects.length ? 4 : 0;

  skills: { name: string; image: string }[] = [
    { name: 'HTML5', image: 'html5.svg' },
    { name: 'CSS3', image: 'css3.svg' },
    { name: 'JavaScript', image: 'javascript.svg' },
    { name: 'Node.JS', image: 'nodejs.svg' },
    { name: 'Express.JS', image: 'expressjs.svg' },
    { name: 'Angular', image: 'angular.svg' },
    { name: 'TypeScript', image: 'typescript.svg' },
    { name: 'Python', image: 'python.svg' },
    { name: 'Flask', image: 'flask.svg' },
    { name: 'GIT', image: 'git.svg' },
    { name: 'Ionic', image: 'ionic.svg' },
    { name: 'Bash', image: 'bash.svg' },
    { name: 'Mongo_DB', image: 'mongodb.png' },
    { name: 'Adobe_XD', image: 'adobexd.svg' },
    { name: 'Figma', image: 'figma.svg' },
  ];

  constructor() {}
  getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon';
    } else if (hour >= 18 && hour <= 23) {
      return 'Good evening';
    }
  }

  openProject(project: IProject) {
    const aElement = document.createElement('a');
    aElement.href = project.href;
    if (aElement.href) {
      aElement.click();
    }
  }
}
