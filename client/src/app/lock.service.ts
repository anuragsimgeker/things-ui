import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LockService {

  private url = 'api/locks';  // API Endpoint

  constructor(private http: HttpClient) { }

  lock(lockId: string, lock: boolean): Observable<any> {
    return this.http.put(`${this.url}/${lockId}`, { command: lock ? 'lock' : 'unlock' }).pipe(
      catchError(this.handleError('lock'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error.message}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
