import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleARoutingModule } from './module-a-routing.module';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
