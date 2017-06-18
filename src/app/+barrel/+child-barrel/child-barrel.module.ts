import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { statesModule } from './child-barrel.states';
import { ChildBarrelComponent } from './child-barrel.component';

console.log('`ChildBarrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ChildBarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(statesModule),
  ],
})
export class ChildBarrelModule {
}
