import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { met } from '../domain/met';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MetService {
  private api = 'http://localhost:5000/mets';
  constructor(private http: HttpClient) {}

  getMets(): Observable<met[]> {
    return this.http.get<met[]>(this.api);
  }

  filterMets(title: string): Observable<met[]> {
    const FilterApi = `${this.api}?title_like=${title}`;
    return this.http.get<met[]>(FilterApi);
  }
}
