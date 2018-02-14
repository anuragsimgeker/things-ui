import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Thing } from './thing';

@Injectable()
export class ThingService {

  private url = 'api/things';  // API Endpoint

  constructor(private http: HttpClient) { }

  /** GET things from the server */
  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.url);
  }

}
