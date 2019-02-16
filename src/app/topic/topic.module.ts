import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopicComponent } from './topic.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TopicComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [TopicComponent]
})
export class TopicModule {}
