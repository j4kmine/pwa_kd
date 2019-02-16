import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndeksComponent } from './indeks.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndeksComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [IndeksComponent]
})
export class IndeksModule {}
