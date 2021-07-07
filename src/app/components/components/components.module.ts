import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {AnimatedBackgroundComponent} from '../animated-background/animated-background.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AnimatedBackgroundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AnimatedBackgroundComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
