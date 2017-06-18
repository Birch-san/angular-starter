import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { DetailModule } from './+detail'

export const STATES: Ng2StateDeclaration[] = [
  { name: 'home', url: '',  component: HomeComponent },
  { name: 'about', url: 'about', component: AboutComponent },
  // this works, but performs a lazy-load, which has problems (i.e. no href and no redirect on startup):
  { name: 'detail.**', url: '/detail', loadChildren: './+detail#DetailModule'},
  // { name: 'barrel', url: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { name: 'no_content', url: '**',    component: NoContentComponent },
];
