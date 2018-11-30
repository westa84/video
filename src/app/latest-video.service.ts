import { Injectable } from '@angular/core';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LatestVideoService {

  fetchMovies() {
    const movies = [
      {
        title: "Lost Highway",
        year: "1997",
        description: "Saksofonista zostaje aresztowany pod zarzutem zamordowania swojej żony. Po kilku dniach znika z celi, a na jego miejscu pojawia się inny mężczyzna. ",
        duration: "135",
        rate: "7,6"
      },
      {
        title: "Mulholland Drive",
        year: "2001",
        description: "Saksofonista zostaje aresztowany pod zarzutem zamordowania swojej żony. Po kilku dniach znika z celi, a na jego miejscu pojawia się inny mężczyzna. Rita traci pamięć wskutek wypadku samochodowego. Odkrywa, że jej torba jest pełna pieniędzy i postanawia dowiedzieć się, skąd one pochodzą.",
        duration: "146",
        rate: "7,6"
      }
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 500);
    });
  }

  constructor() { }
}