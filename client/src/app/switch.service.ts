import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SwitchService {

  private url = 'api/switches';  // API Endpoint

  constructor(private http: HttpClient) { }

  on(switchId: string, status: boolean): Observable<any> {
    return this.http.put(`${this.url}/${switchId}`, { command: status ? 'on' : 'off' }).pipe(
      catchError(this.handleError('on'))
    );
  }

  setLevel(switchId: string, level: number): Observable<any> {
    return this.http.put(`${this.url}/${switchId}`, { command: 'setLevel', level: level }).pipe(
      catchError(this.handleError<any>('setLevel'))
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
