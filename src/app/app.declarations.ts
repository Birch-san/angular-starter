import {
  NgModule, Type
} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { DetailModule } from './+detail';

export const Declarations: Array<Type<any>> = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  NoContentComponent,
  XLargeDirective,
  DetailModule.declarations
];
