import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailopiniComponent } from './detailopini.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailopiniComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [DetailopiniComponent]
})
export class DetailopiniModule {}
