import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './tags.component';
import { CommonModule } from '@angular/common';
import { SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TagsComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [TagsComponent]
})
export class TagsModule {}
