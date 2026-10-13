import { Component } from '@angular/core';
import { site as content } from '../../data/site';

@Component({
  selector: 'app-site-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class SiteFooter {
  protected readonly site = content;
  protected readonly year = new Date().getFullYear();
}
