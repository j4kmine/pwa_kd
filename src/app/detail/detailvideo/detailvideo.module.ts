import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailvideoComponent } from './detailvideo.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailvideoComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [DetailvideoComponent]
})
export class DetailvideoModule {}
