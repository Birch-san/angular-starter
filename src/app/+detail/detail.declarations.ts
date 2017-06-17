import {
  Type
} from '@angular/core';

import { DetailComponent } from './detail.component';
import { ChildDetailModule } from './+child-detail';

export const Declarations: Array<Type<any>> = [
  DetailComponent,
  ...ChildDetailModule.declarations
];
