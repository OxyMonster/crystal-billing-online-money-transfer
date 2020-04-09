import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { UserInfoLogoutComponent } from './components/left-navigation/user-info-logout/user-info-logout.component';
import { RouterModule } from '@angular/router';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { UserProfileHomeComponent } from './user-profile-home/user-profile-home.component';
import { DayNightComponent } from './components/day-night/day-night.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DraftsAutoComponent } from './user-profile-billing/billing-auto/billing-auto.component';
import { DraftsDonationsComponent } from './user-profile-billing/billing-donations/billing-donations.component';
import { DraftsOtherComponent } from './user-profile-billing/billing-other/billing-other.component';
import { UserProfileDraftsComponent } from './user-profile-billing/user-profile-drafts.component';
import { DraftsCategoriesComponent } from './user-profile-billing/billing-categories/billing-categories.component';
import { DraftsEducationComponent } from './user-profile-billing/billing-education/drafts-education.component';
import { DraftsEntertaimentComponent } from './user-profile-billing/billing-entertaiment/billing-entertaiment.component';
import { DraftsTransportationComponent } from './user-profile-billing/billing-transportation/billing-transportation.component';
import { DraftsFinanceComponent } from './user-profile-billing/billing-finance/billing-finance.component';
import { DraftsTelecomsComponent } from './user-profile-billing/billing-telecoms/billing-telecoms.component';
import { DraftsUtilitiesComponent } from './user-profile-billing/billing-utilities/billing-utilities.component';
import { UserProfileTransactionsModule } from './user-profile-transactions/user-profile-transactions.module';
import { UserProfileBillingModule } from './user-profile-billing/user-profile-billing.module';


const COMPONENTS = [ 
  UserProfileComponent,
  LeftNavigationComponent,
  TopNavigationComponent,
  UserInfoLogoutComponent,
  UserProfileDraftsComponent,
  UserProfileTransactionsComponent,
  UserProfileHomeComponent,
  DayNightComponent,
  DraftsUtilitiesComponent,
  DraftsTelecomsComponent,
  DraftsFinanceComponent,
  DraftsEntertaimentComponent,
  DraftsAutoComponent,
  DraftsEducationComponent,
  DraftsDonationsComponent,
  DraftsOtherComponent,
  DraftsTransportationComponent,
  DraftsCategoriesComponent,
]

  
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    SharedModule,
    UserProfileBillingModule,
    RouterModule,
    UserProfileRoutingModule,
    HttpClientModule,
    UserProfileTransactionsModule,
  ], 
  exports: COMPONENTS,
  providers: [
    AuthGuard,
  ]
})
export class UserProfileModule { }
