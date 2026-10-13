import { Component, input } from '@angular/core';
import { VisualKind } from '../../data/projects';

@Component({
  selector: 'app-project-visual',
  templateUrl: './project-visual.html',
  styleUrl: './project-visual.scss',
})
export class ProjectVisual {
  readonly visual = input.required<VisualKind>();
}
