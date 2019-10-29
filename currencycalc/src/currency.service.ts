import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Currency, CurrencyAdapter } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = 'https://api.exchangeratesapi.io/latest';

  constructor(private http: HttpClient,
    private adapter: CurrencyAdapter) { }

  list(): Observable<Currency[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}