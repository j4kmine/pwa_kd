import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalisisComponent } from './analisis.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnalisisComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [AnalisisComponent]
})
export class AnalisisModule {}
