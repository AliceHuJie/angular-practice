import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './child/child.component';
import {DemoComponent} from './demo/demo.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';


const routes: Routes = [
  {path: 'demo', pathMatch: 'full', component: DemoComponent},
];

@NgModule({
  declarations: [ChildComponent, DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgZorroAntdModule
  ]
})
export class LifeCircleModule {
}
