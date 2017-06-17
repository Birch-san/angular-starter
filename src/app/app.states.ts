import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const STATES: Ng2StateDeclaration[] = [
  { name: 'home2', url: '',      component: HomeComponent },
  { name: 'home', url: 'home',  component: HomeComponent },
  { name: 'about', url: 'about', component: AboutComponent },
  { name: 'detail', url: 'detail', loadChildren: './+detail#DetailModule'},
  { name: 'barrel', url: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { name: 'no_content', url: '**',    component: NoContentComponent },
];
