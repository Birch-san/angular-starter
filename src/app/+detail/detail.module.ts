import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { statesModule } from './detail.states';
import { DetailComponent } from './detail.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(statesModule),
  ],
})
export class DetailModule {
}
