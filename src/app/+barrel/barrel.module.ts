import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { statesModule } from './barrel.states';
import { BarrelComponent } from './barrel.component';

console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    BarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild(statesModule),
  ],
})
export class BarrelModule {
}
