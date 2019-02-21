import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {Main} from '../app/shared/module/main'
import {TransferHttpCacheModule} from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule}from './shared/module/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    TransferHttpCacheModule,
    SharedModule
  ],
  providers: [Main],
  bootstrap: [AppComponent]
})
export class AppModule { }
