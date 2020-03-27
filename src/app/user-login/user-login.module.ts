import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [

  UserLoginComponent,
  

]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserLoginRoutingModule,
  ], 
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UserLoginModule { 
  
}
