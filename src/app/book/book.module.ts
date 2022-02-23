import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { BmIsbnPipe } from './shared/bm-isbn.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    BmIsbnPipe,
    BookEditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [BookListComponent, BookEditComponent],
})
export class BookModule {}
