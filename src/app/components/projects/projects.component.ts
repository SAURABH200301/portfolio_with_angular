import { Component } from '@angular/core';
import { Projects, projects } from './projects';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  // animations: [
  //   trigger('imageZoom', [
  //     state('normal', style({ transform: 'scale(1)' })),
  //     state('zoomed', style({ transform: 'scale(1.2)' })),
  //     transition('normal => zoomed', animate('0.2s')),
  //     transition('zoomed => normal', animate('0.2s'))
  //   ])
  // ]
})
export class ProjectsComponent {
  projects: projects[] = Projects;

  onMouseEnter(pro:projects) {
    pro.isHovered = true;
  }
  onMouseLeave(pro:projects) {
    pro.isHovered = false;
  }
}
