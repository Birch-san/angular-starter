import { ChildDetailComponent } from './child-detail.component';
import { StatesModule } from '@uirouter/angular';

export const statesModule: StatesModule = {
  states: [
    { name: 'detail.child-detail', url: '/child-detail',  component: ChildDetailComponent }
  ]
};
