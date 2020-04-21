import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserProfileHomeComponent } from './user-profile-home.component';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  UserProfileHomeComponent,
  ChangePasswordModalComponent,

]


@NgModule({
  declarations:  COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class UserProfileHomeModule { }
