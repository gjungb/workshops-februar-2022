import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { BmIsbnPipe } from './shared/bm-isbn.pipe';

@NgModule({
  declarations: [BookCardComponent, BookListComponent, BmIsbnPipe],
  imports: [CommonModule],
  exports: [BookListComponent]
})
export class BookModule {}
