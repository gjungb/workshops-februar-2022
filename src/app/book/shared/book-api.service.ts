import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * TODO
   *
   * => asynchronous / non-blocking
   */
  getAll(): Observable<Book[]> {
    // TODO externalize URL
    return this.httpClient
      .get<Book[]>('http://localhost:4730/books')
      .pipe(delay(5000));
  }
}
