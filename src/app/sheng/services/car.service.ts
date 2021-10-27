// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../domain/met';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return (
      this.http
        .get('/showcase/resources/data/cars-small.json')
        .toPromise()
        // .then((res) => <Car[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
