import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  { path: 'child1', component: Child1Component },
  { path: 'module-b', loadChildren: () => import('../module-b/module-b.module').then(m => m.ModuleBModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
