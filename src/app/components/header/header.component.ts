import { Component, OnInit } from '@angular/core';
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  constructor(
    public scroll: ScrollService
  ) { }

  ngOnInit() {
    this.scroll.on_scroll.subscribe(() => this.isMobileMenuOpen = false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
