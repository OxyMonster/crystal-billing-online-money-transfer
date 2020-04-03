import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { UserProfileHomeComponent } from './user-profile-home/user-profile-home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserProfileDraftsComponent } from './user-profile-billing/user-profile-drafts.component';
import { DraftsCategoriesComponent } from './user-profile-billing/billing-categories/billing-categories.component';
import { DraftsTransportationComponent } from './user-profile-billing/billing-transportation/billing-transportation.component';
import { DraftsEducationComponent } from './user-profile-billing/billing-education/drafts-education.component';
import { DraftsDonationsComponent } from './user-profile-billing/billing-donations/billing-donations.component';
import { DraftsOtherComponent } from './user-profile-billing/billing-other/billing-other.component';
import { DraftsEntertaimentComponent } from './user-profile-billing/billing-entertaiment/billing-entertaiment.component';
import { DraftsFinanceComponent } from './user-profile-billing/billing-finance/billing-finance.component';
import { DraftsAutoComponent } from './user-profile-billing/billing-auto/billing-auto.component';
import { DraftsTelecomsComponent } from './user-profile-billing/billing-telecoms/billing-telecoms.component';
import { DraftsUtilitiesComponent } from './user-profile-billing/billing-utilities/billing-utilities.component';
import { TransactionsDraftsComponent } from './user-profile-transactions/transactions-drafts/transactions-drafts.component';
import { TransactionsNewTransactionsComponent } from './user-profile-transactions/transactions-new-transactions/transactions-new-transactions.component';
import { TransactionsSelectCategoriesComponent } from './user-profile-transactions/transactions-select-categories/transactions-select-categories.component';


const routes: Routes = [ 
  
  { path: '', component: UserProfileComponent, canActivate: [ AuthGuard ], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' } ,
    { path: 'home', component: UserProfileHomeComponent },
    { path: 'drafts', component: UserProfileDraftsComponent,  children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: DraftsCategoriesComponent }, 
      { path: 'utilities', component: DraftsUtilitiesComponent },
      { path: 'telecoms', component: DraftsTelecomsComponent },
      { path: 'finance', component: DraftsFinanceComponent },
      { path: 'entertainment', component: DraftsEntertaimentComponent },
      { path: 'transportation', component: DraftsTransportationComponent },
      { path: 'education', component: DraftsEducationComponent },
      { path: 'donations', component: DraftsDonationsComponent },
      { path: 'other', component: DraftsOtherComponent },
      { path: 'auto', component: DraftsAutoComponent }

    ] },

    { path: 'transactions', component: UserProfileTransactionsComponent,  children: [
      { path: '', redirectTo: 'categories', pathMatch:  'full' }, 
      { path: 'categories', component: TransactionsSelectCategoriesComponent }, 
      { path: 'drafts', component: TransactionsDraftsComponent }, 
      { path: 'new-tranasctions', component: TransactionsNewTransactionsComponent }
    ] },

  ] }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileRoutingModule { }
