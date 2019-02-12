import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
   { path: '', loadChildren: './home/home.module#HomeModule'},
   { path: 'berita', loadChildren: './category/berita/berita.module#HomeModule'},
   { path: 'opini', loadChildren: './category/opini/opini.module#OpiniModule'},
   { path: 'telaah', loadChildren: './category/telaah/telaah.module#TelaahModule'},
   { path: 'video', loadChildren: './category/video/video.module#VideoModule'},
   { path: 'ekonografik', loadChildren: './category/ekonografik/ekonografik.module#EkonografikModule'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}