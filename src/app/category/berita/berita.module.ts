import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Berita } from './berita';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Berita,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Berita]
})
export class HomeModule {}
