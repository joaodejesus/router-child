import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'module-a', loadChildren: () => import('./module-a/module-a.module').then(m => m.ModuleAModule) },
  { path: '', redirectTo: '/module-a', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
