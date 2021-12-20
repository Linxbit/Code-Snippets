import { NgModule, Injectable, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BppModule } from './bpp.module';
import { RootComponentFactoryResolver } from './aaa';

// @Injectable()
// export class RootComponentFactoryResolver {
//   constructor() { }
// }

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './bpp.module#BppModule' }
]

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ModalModule.forRoot()],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [RootComponentFactoryResolver]
})
export class AppModule { }
