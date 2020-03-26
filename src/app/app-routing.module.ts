import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  //  & & & Lazy Load * * * *
  { path: 'login', loadChildren: './user-login/user-login.module#UserLoginModule' }, 
  { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' }, 

  //  * * * 404 * ** 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
