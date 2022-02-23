import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  // books!: Book[];

  books$!: Observable<Book[]>;

  private sub?: Subscription;

  constructor(private readonly bookApi: BookApiService) {}

  ngOnInit(): void {
    /**
     * timing
     *
     * ticker$
     */
    this.sub = timer(3000, 1000)
      .pipe(tap((value) => console.log(value)))
      .subscribe();

    /**
     *
     */
    this.books$ = this.bookApi
      .getAll()
      .pipe(tap((value) => console.log(value)));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  handleBookDetail(book: Book): void {
    console.log(book);
  }
}
