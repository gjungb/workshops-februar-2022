import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { BmIsbnPipe } from './shared/bm-isbn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    BmIsbnPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
