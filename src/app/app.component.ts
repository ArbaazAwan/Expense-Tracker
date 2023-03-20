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
  expensesArray:any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
  }

  newExpense() {
    return this.fb.group({
      description:null,
      entryDate:null,
      entryAmount:null,
      tags:null
    });
  }

  resetForm(){
    this.form = new FormGroup({
      expenses: new FormArray([])
    });
    this.expenses().clear();
    this.addExpense();
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

  onSubmit(){
    this.expensesArray.push(this.expenses().value[0]);
    console.log('expenses are', this.expensesArray);
    this.resetForm();
  }
}
