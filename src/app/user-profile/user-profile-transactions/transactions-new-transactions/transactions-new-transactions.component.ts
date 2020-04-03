import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions-new-transactions',
  templateUrl: './transactions-new-transactions.component.html',
  styleUrls: ['./transactions-new-transactions.component.scss']
})
export class TransactionsNewTransactionsComponent implements OnInit {


  transactionForm: FormGroup; 



  constructor(
    private fb: FormBuilder
  ) {

    this.transactionForm = this.fb.group({
      transferTo: [ '', Validators.required ],
      amount: [ '', Validators.required ],
      description: [ '', Validators.required ],
      // phone: [ '', Validators.required ],

    }); 

   }

  ngOnInit(): void {

  }; 



  onSubmit(form) {
    console.log(form.value);
    
  }

}
