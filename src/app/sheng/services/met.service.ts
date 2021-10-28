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
  sortOrder: boolean = false;
  getMets(): Observable<met[]> {
    return this.http.get<met[]>(this.api);
  }

  filterMets(title: string): Observable<met[]> {
    const FilterApi = `${this.api}?title_like=${title}`;
    return this.http.get<met[]>(FilterApi);
  }

  sortMets(sortKey: string, filterStr: string): Observable<met[]> {
    if (Boolean(filterStr)) {
      const FilterApi = `${
        this.api
      }?title_like=${filterStr}&_sort=${sortKey}&_order=${
        this.sortOrder ? 'desc' : 'asc'
      }`;
      this.sortOrder = !this.sortOrder;

      return this.http.get<met[]>(FilterApi);
    }
    const FilterApi = `${this.api}?_sort=${sortKey}&_order=${
      this.sortOrder ? 'desc' : 'asc'
    }`;
    this.sortOrder = !this.sortOrder;

    return this.http.get<met[]>(FilterApi);
  }
}
