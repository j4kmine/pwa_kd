import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultimediaComponent } from './multimedia.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MultimediaComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [MultimediaComponent]
})
export class MultimediaModule {}
