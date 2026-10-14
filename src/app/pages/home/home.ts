import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Logos } from '../../sections/logos/logos';
import { Process } from '../../sections/process/process';
import { Contact } from '../../sections/contact/contact';
import { SiteFooter } from '../../sections/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Logos, Process, Contact, SiteFooter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor() {
    inject(Title).setTitle('Libby Lebyane — Junior frontend developer and designer');
  }
}
