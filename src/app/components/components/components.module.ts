import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {AnimatedBackgroundComponent} from '../animated-background/animated-background.component';
import { FooterComponent } from '../footer/footer.component';
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [
    HeaderComponent,
    AnimatedBackgroundComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        IonicModule
    ],
  exports: [
    HeaderComponent,
    AnimatedBackgroundComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
