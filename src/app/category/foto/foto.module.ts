import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Foto } from './foto';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Foto,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Foto]
})
export class FotoModule {}
