import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ekonografik } from './ekongrafik';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Ekonografik,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Ekonografik]
})
export class EkonografikModule {}
