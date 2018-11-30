import { Component, OnInit } from '@angular/core';
import { LatestVideoService } from '../latest-video.service';
import { MovieInterface } from 'src/interface/movie.interface';

@Component({
 selector: 'app-video-list',
 templateUrl: './video-list.component.html',
 styleUrls: ['./video-list.component.css'],
 providers: [
   LatestVideoService
 ]
})
export class VideoListComponent implements OnInit {

 movies = [];

 constructor(public latestVideoService: LatestVideoService) {
 }

 ngOnInit() {
   this.latestVideoService.fetchMovies()
     .then((movies: Array<MovieInterface>) => {
       this.movies = movies;
     });
 }

}