import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { UserInfoLogoutComponent } from './components/left-navigation/user-info-logout/user-info-logout.component';
import { RouterModule } from '@angular/router';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileDraftsComponent } from './user-profile-billing/user-profile-drafts.component';
import { UserProfileTransactionsModule } from './user-profile-transactions/user-profile-transactions.module';
import { UserProfileBillingModule } from './user-profile-billing/user-profile-billing.module';
import { UserProfileHomeModule } from './user-profile-home/user-profile-home.module';


const COMPONENTS = [ 
  UserProfileComponent,
  LeftNavigationComponent,
  TopNavigationComponent,
  UserInfoLogoutComponent,
  UserProfileDraftsComponent,
  UserProfileTransactionsComponent,
]

  
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UserProfileRoutingModule,
    HttpClientModule,
    UserProfileBillingModule,
    UserProfileTransactionsModule,
    UserProfileHomeModule
  
  ], 
  exports: COMPONENTS,
  providers: [
    AuthGuard,
  ]
})
export class UserProfileModule { }
