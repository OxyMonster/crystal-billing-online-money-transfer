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


const COMPONENTS = [ 
  UserProfileComponent,
  LeftNavigationComponent,
  TopNavigationComponent,
  UserInfoLogoutComponent,
  UserProfileDraftsComponent,
  UserProfileTransactionsComponent,
  UserProfileHomeComponent,
  DayNightComponent
]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    UserProfileRoutingModule
  ], 
  exports: COMPONENTS
})
export class UserProfileModule { }
