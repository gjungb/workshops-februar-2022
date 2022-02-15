import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private readonly books: Book[] = [
    {
      isbn: '9783866801929',
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
    },
  ];

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * TODO
   *
   * => asynchrones / non-blocking
   */
  getAll(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>('http://localhost:4730/books')
      .pipe(delay(5000));
  }
}
