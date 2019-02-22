import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailinfografikComponent } from './detailinfografik.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailinfografikComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [DetailinfografikComponent]
})
export class DetailinfografikModule {}
