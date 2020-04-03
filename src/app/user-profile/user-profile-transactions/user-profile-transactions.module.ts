import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsDraftsComponent } from './transactions-drafts/transactions-drafts.component';
import { TransactionsNewTransactionsComponent } from './transactions-new-transactions/transactions-new-transactions.component';
import { TransactionsSelectCategoriesComponent } from './transactions-select-categories/transactions-select-categories.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


const COMPONENTS = [
  TransactionsDraftsComponent, 
  TransactionsNewTransactionsComponent, 
  TransactionsSelectCategoriesComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],    
  
  exports: COMPONENTS,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserProfileTransactionsModule { }
