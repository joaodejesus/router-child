import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleBRoutingModule } from './module-b-routing.module';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
