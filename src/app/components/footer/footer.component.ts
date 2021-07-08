import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HomePage} from "../../home/home.page";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @Input() page: HomePage;
  scrollToTop = () => { };
  constructor() { }

  ngAfterViewInit() {
    console.log(this.page);
    if (this.page && this.page.ionContent) {
      console.log('Setting scroll up function...');
      this.scrollToTop = () => {
        this.page.ionContent.scrollToTop(400);
      };
    }
  }

}
