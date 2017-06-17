import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { States } from './child-detail.states';
import { Declarations } from './child-detail.declarations';

console.log('`ChildDetail` bundle loaded asynchronously');

@NgModule({
  declarations: Declarations,
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(States),
  ],
})
export class ChildDetailModule {
  public static states = States;
  public static declarations = Declarations;
}
