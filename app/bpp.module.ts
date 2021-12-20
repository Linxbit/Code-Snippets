import { NgModule, Component, ComponentFactoryResolver } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap';

import { RootComponentFactoryResolver } from './aaa';

@Component({
  selector: 'app-bar',
  template: `<h3>babababababa</h3>`
})
export class BarComponent { }

@Component({
  selector: 'app-foo',
  template: `
    <h3 (click)="gogo()">Click me to reproduce error</h3>
  `
})
export class FooComponent {
  constructor(
    private _modal: BsModalService,
    public _cfr: ComponentFactoryResolver,
    public _rrr: RootComponentFactoryResolver
  ) {
    console.log(_cfr === _rrr._cfr);
  }
  gogo() {
    this._modal.show(BarComponent)
  }
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FooComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [FooComponent, BarComponent],
  exports: [FooComponent, BarComponent],
  entryComponents: [BarComponent],
})
export class BppModule { }