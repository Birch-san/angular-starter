import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { statesModule } from './child-detail.states';
import { ChildDetailComponent } from './child-detail.component';

console.log('`ChildDetail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    ChildDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(statesModule),
  ],
})
export class ChildDetailModule {
}
