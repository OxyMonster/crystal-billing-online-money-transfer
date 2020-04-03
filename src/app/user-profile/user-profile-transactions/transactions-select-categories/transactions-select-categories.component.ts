import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-select-categories',
  templateUrl: './transactions-select-categories.component.html',
  styleUrls: ['./transactions-select-categories.component.scss']
})
export class TransactionsSelectCategoriesComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }; 

  routeToSelectedCategory(categoryType: string) {
    
    switch (categoryType) {
      case 'drafts' : this.router.navigate(['user-profile/transactions/drafts']);        
        break;
      case 'new' : this.router.navigate(['user-profile/transactions/new-tranasctions']);
      break
    }; 


  }
}
