import { DetailComponent } from './detail.component';
import { StatesModule } from '@uirouter/angular';

export const statesModule: StatesModule = {
  states: [
    { name: 'detail', url: '/detail', component: DetailComponent },
    { name: 'detail.child-detail.**', loadChildren: './+child-detail#ChildDetailModule' }
    ]
};
