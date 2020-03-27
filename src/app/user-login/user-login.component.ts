import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userForm: FormGroup;
  isEngLangActive: boolean = false; 

  isError: boolean = false; 
  isSubmited: boolean = false; 

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private loginService: UserLoginService,
  ) {

    this.userForm = this.fb.group({
      msisdn: [ '', Validators.required ], 
      pin: ['', Validators.required ],
      languageId: 2
    })

   }

  ngOnInit(): void {
  }


  clearError(e) { 
    console.log(e);
    
  }


  onSubmit(userForm: FormGroup) {

    this.isSubmited = true; 
    this.isError = false;

      //  * * * Set Language * * * 
      this.isEngLangActive ? this.userForm.controls['languageId'].setValue(2) : 
                             this.userForm.controls['languageId'].setValue(1); 
      // * * * Authorize * * * 
    this.loginService
        .userLogin(userForm.value)
        .subscribe( data => {
          
          if ( !data['isSuccess'] ) {

            this.isError = true; 
            this.isSubmited = false;
          } else { 
            this.isError = false;
            this.isSubmited = false;
            localStorage.setItem('sessionId', data['data']['sessionId']);
            localStorage.setItem('msisdn', userForm.value.msisdn );

            this.router.navigate(['/user-profile/home']); 
          }
          console.log(data);
          
          
        }, err => console.log(err)); 
    

  }

}
