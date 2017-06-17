import { DetailComponent } from './detail.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { ChildDetailModule } from './+child-detail';

export const states: Ng2StateDeclaration[] = [
  { name: 'detail', url: '/detail', component: DetailComponent },
  ...ChildDetailModule.states,
  { name: 'detail.child-detail', url: '/child-detail', component: DetailComponent },
  // { path: '', children: [
  //   { path: '', component: DetailComponent },
  //   { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  // ]},
];
