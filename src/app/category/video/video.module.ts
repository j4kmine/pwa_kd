import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Video } from './video';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Video,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [Video]
})
export class VideoModule {}
