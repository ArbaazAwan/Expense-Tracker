import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;
  // expenses!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      expenses: new FormArray([])
    });
    this.addExpense();
  }

  newExpense() {
    return this.fb.group({
      description:null,
      entryDate:null,
      entryAmount:null,
      tags:null
    });
  }

  addExpense() {
    this.expenses().push(this.newExpense());
  }

  removeExpense(index: number) {
    this.expenses().removeAt(index);
  }

  expenses(): FormArray {
    return this.form.get('expenses') as FormArray;
  }
}
