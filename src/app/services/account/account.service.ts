import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Account } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public readonly url = 'https://api.johnlawrimore.com/directory/accounts';
  private readonly headers: HttpHeaders;

  constructor(private readonly http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Authorization', 'jlawrimore')
      .set('Content-Type', 'application/json');
  }

  public getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.url}/${id}`, { headers: this.headers })
    .pipe(map(a => {
      a.phoneNumbers = a.phoneNumbers || [];
      return a;
    }),
    catchError(e => throwError(e)));
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url, { headers: this.headers })
    .pipe(catchError(e => throwError(e)));
  }

  public updateAccount(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.url}/${id}`, account, { headers: this.headers })
    .pipe(catchError(e => throwError(e)));
  }

  public deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers })
    .pipe(catchError(e => throwError(e)));
  }

  public createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.url, account, { headers: this.headers })
    .pipe(catchError(e => throwError(e)));
  }
}
