import { ChildDetailComponent } from './child-detail.component';
import { StatesModule } from '@uirouter/angular';

export function resolveAccount() {
  return new Promise((yes, no) => {
    setTimeout(() => {
      yes('hey');
    }, 500);
  });
}

export const statesModule: StatesModule = {
  states: [
    { name: 'detail.child-detail',
      url: '/child-detail',
      component: ChildDetailComponent,
      resolve: {
        account: resolveAccount
      }
    }
  ]
};
