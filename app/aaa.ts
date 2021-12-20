import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class RootComponentFactoryResolver {
  constructor(public _cfr: ComponentFactoryResolver) { }
}