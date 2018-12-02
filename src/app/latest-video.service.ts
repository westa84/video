import { Injectable } from '@angular/core';
import { resolve } from 'q';
import { MovieInterface } from 'src/interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LatestVideoService {

  fetchMovies(): Promise<Array<object>> {
    return window.fetch('/assets/db.json')
      .then(response => response.json());
  }

  async fetchMovieById(movieId): Promise<MovieInterfaceInterface> {
    const response = await window.fetch('/assets/db.json');
    const movies = await response.json();
    return movies.find((movie) => {
      return movie.id === movieId;
    });
  }

  constructor() { }
}