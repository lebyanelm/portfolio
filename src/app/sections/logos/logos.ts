import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { disciplineChip, workGroups } from '../../data/logos';
import { LogoMark } from '../../marks/logo-mark';

@Component({
  selector: 'app-logos',
  imports: [LogoMark, RouterLink],
  templateUrl: './logos.html',
  styleUrl: './logos.scss',
})
export class Logos {
  protected readonly groups = workGroups;
  protected readonly chip = disciplineChip;
}
