import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      isbn: new FormControl('9780071494618', {
        validators: [Validators.required, Validators.minLength(10)],
      }),
      title: new FormControl()
    });

    this.form
      .get('isbn')
      ?.valueChanges.pipe(debounceTime(300))
      .subscribe({
        next: (value) => console.log(value),
      });

    this.form.statusChanges.subscribe({
      next: (status) => console.log(status),
    });
  }
}
