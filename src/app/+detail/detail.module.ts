import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { States } from './detail.states';
import { Declarations } from './detail.declarations';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: Declarations,
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(States),
  ],
})
export class DetailModule {
  public static states = States;
  public static declarations = Declarations;
}
