import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDemo1Component} from './input-demo1/input-demo1.component';
import {InputRoutingModule} from './input-routing.module';
import {InputDemo2Component} from './input-demo2/input-demo2.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [InputDemo1Component, InputDemo2Component],
  imports: [
    CommonModule,
    InputRoutingModule,
    NgZorroAntdModule
  ]
})
export class InputModule {
}
