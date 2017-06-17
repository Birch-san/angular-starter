import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { UIRouterModule } from '@uirouter/angular';

import { states } from './detail.states';
import { DetailComponent } from './detail.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(states),
  ],
})
export class DetailModule {
  public static states = states;
}
