import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import {SharedModule}from '../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [SearchComponent]
})
export class SearchModule {}
