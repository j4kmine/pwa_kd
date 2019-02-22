import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailtelaahComponent } from './detailtelaah.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailtelaahComponent,
        pathMatch: 'full'
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  declarations: [DetailtelaahComponent]
})
export class DetailtelaahModule {}
