import { Ng2StateDeclaration } from '@uirouter/angular';
import { ChildDetailComponent } from './child-detail.component';

export const States: Ng2StateDeclaration[] = [
  { name: 'detail.child-detail', url: '/child-detail',  component: ChildDetailComponent }
];
