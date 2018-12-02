import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLatestVideoListComponent } from '../page-latest-video-list/page-latest-video-list.component';
import { PageVideoComponent } from '../page-video/page-video.component';
import { PageVideoNotFoundComponent } from '../page-video-not-found/page-video-not-found.component';

const routes: Routes = [

  {
    path: '',
    component: PageLatestVideoListComponent
  },
  {
    path: 'video/:id',
    component: PageVideoComponent
  },
  {
    path: 'video-not-found',
    component: PageVideoNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
