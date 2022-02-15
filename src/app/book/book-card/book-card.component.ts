import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  /**
   * TODO docs
   */
  @Input('bmContent')
  content?: Book;

  /**
   * The text color to be used to display the abstract.
   * 
   * The value has to be a valid CSS color string.
   * 
   * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
   * 
   * @default 'black'
   * 
   * @example 'yellow'
   * @example '#fdcb1a'
   */
  @Input('bmColor')
  color = 'black';

  /**
   * TODO docs
   * 
   * Lorem ipsum...
   */
  @Output()
  detailClick = new EventEmitter<Book>();

  customStyle = {
    backgroundColor: 'yellow',
    color: this.color,
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * Effect / Side Effect
   */
  handleButtonClick(ev: MouseEvent): void {
    console.log(ev);
    this.detailClick.emit(this.content);
  }
}
