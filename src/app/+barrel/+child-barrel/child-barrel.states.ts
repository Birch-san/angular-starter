import { ChildBarrelComponent } from './child-barrel.component';
import { StatesModule } from '@uirouter/angular';

export const statesModule: StatesModule = {
  states: [
    { name: 'barrel.child-barrel',
      url: '/child-barrel',
      component: ChildBarrelComponent
    }
  ]
};
