import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailberitaComponent } from './detailberita.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailberitaComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [DetailberitaComponent]
})
export class DetailberitaModule {}
