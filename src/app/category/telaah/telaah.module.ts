import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Telaah } from './telaah';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Telaah,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Telaah]
})
export class TelaahModule {}
