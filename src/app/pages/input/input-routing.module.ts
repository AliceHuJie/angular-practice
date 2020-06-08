import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InputDemo1Component} from './input-demo1/input-demo1.component';
import {InputDemo2Component} from './input-demo2/input-demo2.component';

const routes: Routes = [
  {path: 'demo1', pathMatch: 'full', component: InputDemo1Component},
  {path: 'demo2', pathMatch: 'full', component: InputDemo2Component},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InputRoutingModule {
}
