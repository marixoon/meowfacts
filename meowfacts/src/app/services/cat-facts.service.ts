import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  constructor(private http: HttpClient) {}

  getCatFact(): Observable<string> {
    return this.http.get<{ data: string }>('/api').pipe(
      map(response => response.data)
    );
  }
}
