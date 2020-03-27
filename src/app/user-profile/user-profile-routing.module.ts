import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileDraftsComponent } from './user-profile-drafts/user-profile-drafts.component';
import { UserProfileTransactionsComponent } from './user-profile-transactions/user-profile-transactions.component';
import { UserProfileHomeComponent } from './user-profile-home/user-profile-home.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [ 
  
  { path: '', component: UserProfileComponent, canActivate: [ AuthGuard ], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' } ,
    { path: 'home', component: UserProfileHomeComponent },
    { path: 'drafts', component: UserProfileDraftsComponent },
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
