import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { UserInfoLogoutComponent } from './components/left-navigation/user-info-logout/user-info-logout.component';
import { UserProfileDraftsComponent } from './user-profile-drafts/user-profile-drafts.component';
import { RouterModule } from '@angular/router';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { UserProfileHomeComponent } from './user-profile-home/user-profile-home.component';
import { DayNightComponent } from './components/day-night/day-night.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { DraftsUtilitiesComponent } from './user-profile-drafts/drafts-utilities/drafts-utilities.component';
import { DraftsTelecomsComponent } from './user-profile-drafts/drafts-telecoms/drafts-telecoms.component';
import { DraftsFinanceComponent } from './user-profile-drafts/drafts-finance/drafts-finance.component';
import { DraftsEntertaimentComponent } from './user-profile-drafts/drafts-entertaiment/drafts-entertaiment.component';
import { DraftsAutoComponent } from './user-profile-drafts/drafts-auto/drafts-auto.component';
import { DraftsEducationComponent } from './user-profile-drafts/drafts-education/drafts-education.component';
import { DraftsDonationsComponent } from './user-profile-drafts/drafts-donations/drafts-donations.component';
import { DraftsOtherComponent } from './user-profile-drafts/drafts-other/drafts-other.component';
import { DraftsTransportationComponent } from './user-profile-drafts/drafts-transportation/drafts-transportation.component';


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
  DraftsTransportationComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    UserProfileRoutingModule,
    SharedModule
  ], 
  exports: COMPONENTS,
  providers: [
    AuthGuard
  ]
})
export class UserProfileModule { }
