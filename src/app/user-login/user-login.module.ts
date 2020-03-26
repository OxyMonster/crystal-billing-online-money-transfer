import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';

const COMPONENTS = [

  UserLoginComponent,
  

]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    UserLoginRoutingModule,
  ], 
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UserLoginModule { 
  
}
