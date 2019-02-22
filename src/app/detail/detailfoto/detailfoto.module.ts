import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailfotoComponent } from './detailfoto.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailfotoComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [DetailfotoComponent]
})
export class DetailfotoModule {}
