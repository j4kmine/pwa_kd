import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
   { path: '', loadChildren: './home/home.module#HomeModule'},
   { path: 'berita', loadChildren: './category/berita/berita.module#HomeModule'},
   { path: 'opini', loadChildren: './category/opini/opini.module#OpiniModule'},
   { path: 'telaah', loadChildren: './category/telaah/telaah.module#TelaahModule'},
   { path: 'video', loadChildren: './category/video/video.module#VideoModule'},
   { path: 'foto', loadChildren: './category/foto/foto.module#FotoModule'},
   { path: 'ekonografik', loadChildren: './category/ekonografik/ekonografik.module#EkonografikModule'},
   { path: 'topic/:topic', loadChildren: './topic/topic.module#TopicModule'},
   { path: 'tags/:tags', loadChildren: './tags/tags.module#TagsModule'},
   { path: 'indeks', loadChildren: './indeks/indeks.module#IndeksModule'},
   { path: 'search', loadChildren: './search/search.module#SearchModule'},
   { path: 'analisis', loadChildren: './analisis/analisis.module#AnalisisModule'},
   { path: 'multimedia', loadChildren: './multimedia/multimedia.module#MultimediaModule'},
   { path: 'berita/:tahun/:bulan/:tanggal/:slug/:page', loadChildren: './detail/detailberita/detailberita.module#DetailberitaModule'},
   { path: 'opini/:tahun/:bulan/:tanggal/:slug/:page', loadChildren: './detail/detailopini/detailopini.module#DetailopiniModule'},
   { path: 'infografik/:tahun/:bulan/:tanggal/:slug/:page', loadChildren: './detail/detailinfografik/detailinfografik.module#DetailinfografikModule'},
   { path: 'foto/:tahun/:bulan/:tanggal/:slug/:page', loadChildren: './detail/detailfoto/detailfoto.module#DetailfotoModule'},
   { path: 'video/:tahun/:bulan/:tanggal/:slug/:page', loadChildren: './detail/detailvideo/detailvideo.module#DetailvideoModule'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}