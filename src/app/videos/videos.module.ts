import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
import { PageLatestVideoListComponent } from '../page-latest-video-list/page-latest-video-list.component';
import { PageVideoComponent } from '../page-video/page-video.component';
import { PageVideoNotFoundComponent } from '../page-video-not-found/page-video-not-found.component';

@NgModule({
  declarations: [VideoListComponent, VideoDetailComponent, PageLatestVideoListComponent, PageVideoComponent, PageVideoNotFoundComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  exports: [
    VideoListComponent
  ]
})
export class VideosModule { }
