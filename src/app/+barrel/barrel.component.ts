import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Barrel` component loaded asynchronously');

@Component({
  selector: 'barrel',
  template: `
    <h1>Hello from Barrel</h1>
    <span>
      <a uiSref="barrel.child-barrel">
        Child Barrel
      </a>
    </span>
    <input [(ngModel)]="state.epithet">
    <pre [innerText]="state | json"></pre>
    
    <ui-view></ui-view>
  `,
})
export class BarrelComponent implements OnInit {

  public state = {
    epithet: 'moe'
  };

  public tie = 'brown';

  public ngOnInit() {
    console.log('hello `Barrel` component');
  }

}
