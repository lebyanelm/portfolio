import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {AnimatedBackgroundComponent} from '../animated-background/animated-background.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AnimatedBackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AnimatedBackgroundComponent
  ]
})
export class ComponentsModule { }
