import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileDraftsComponent } from './user-profile-drafts/user-profile-drafts.component';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { UserProfileHomeComponent } from './user-profile-home/user-profile-home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { DraftsUtilitiesComponent } from './user-profile-drafts/drafts-utilities/drafts-utilities.component';
import { DraftsTelecomsComponent } from './user-profile-drafts/drafts-telecoms/drafts-telecoms.component';
import { DraftsFinanceComponent } from './user-profile-drafts/drafts-finance/drafts-finance.component';
import { DraftsEntertaimentComponent } from './user-profile-drafts/drafts-entertaiment/drafts-entertaiment.component';
import { DraftsAutoComponent } from './user-profile-drafts/drafts-auto/drafts-auto.component';
import { DraftsEducationComponent } from './user-profile-drafts/drafts-education/drafts-education.component';
import { DraftsDonationsComponent } from './user-profile-drafts/drafts-donations/drafts-donations.component';
import { DraftsOtherComponent } from './user-profile-drafts/drafts-other/drafts-other.component';
import { DraftsTransportationComponent } from './user-profile-drafts/drafts-transportation/drafts-transportation.component';


const routes: Routes = [ 
  
  { path: '', component: UserProfileComponent, canActivate: [ AuthGuard ], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' } ,
    { path: 'home', component: UserProfileHomeComponent },
    { path: 'drafts', component: UserProfileDraftsComponent,  children: [
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
    { path: 'transactions', component: UserProfileTransactionsComponent },

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
