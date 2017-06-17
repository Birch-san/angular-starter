import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { DetailModule } from './+detail';

export const STATES: Ng2StateDeclaration[] = [
  { name: 'home', url: '',  component: HomeComponent },
  { name: 'about', url: 'about', component: AboutComponent },
  ...DetailModule.states,
  // { name: 'detail', url: 'detail', loadChildren: './+detail#DetailModule'},
  // { name: 'barrel', url: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { name: 'no_content', url: '**',    component: NoContentComponent },
];
