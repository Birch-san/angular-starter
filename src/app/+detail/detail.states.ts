import { DetailComponent } from './detail.component';
import { StatesModule } from '@uirouter/angular';

export const statesModule: StatesModule = {
  states: [
    { name: 'detail', url: '/detail', component: DetailComponent },
    { name: 'detail.child-detail.**',
      url: '/child-detail',
      loadChildren: './+child-detail#ChildDetailModule' }
    ]
};
