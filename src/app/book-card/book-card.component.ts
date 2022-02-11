import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input('bmContent')
  content?: Book;

  customStyle = {
    backgroundColor: 'yellow',
    color: 'lightblue'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
