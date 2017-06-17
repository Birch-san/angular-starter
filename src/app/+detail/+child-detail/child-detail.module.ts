import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { UIRouterModule } from '@uirouter/angular';

import { states } from './child-detail.states';
import { ChildDetailComponent } from './child-detail.component';

console.log('`ChildDetail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ChildDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(states),
  ],
})
export class ChildDetailModule {
  public static states = states;
}
