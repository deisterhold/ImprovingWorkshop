import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Account } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public readonly url = 'https://api.johnlawrimore.com/directory/accounts';

  constructor(private readonly http: HttpClient) { }

  public getAccount(id: number): Observable<Account> {
    const headers = new HttpHeaders()
      .set('Authorization', 'jlawrimore')
      .set('Content-Type', 'application/json');
    return this.http.get<Account>(`${this.url}/${id}`, { headers })
    .pipe(catchError(e => Observable.throw(e)));
  }
}
