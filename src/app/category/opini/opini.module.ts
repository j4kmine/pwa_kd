import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Opini } from './opini';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Opini,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Opini]
})
export class OpiniModule {}
