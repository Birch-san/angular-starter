import { BarrelComponent } from './barrel.component';
import { StatesModule } from '@uirouter/angular';

export const statesModule: StatesModule = {
  states: [
    { name: 'barrel', url: '/barrel', component: BarrelComponent },
    { name: 'barrel.child-barrel.**',
      url: '/child-barrel',
      loadChildren: './+child-barrel#ChildBarrelModule' }
  ]
};
