import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'input', loadChildren: () => import('./pages/input/input.module').then(m => m.InputModule)},
  {path: 'life-circle', loadChildren: () => import('./pages/life-circle/life-circle.module').then(m => m.LifeCircleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
