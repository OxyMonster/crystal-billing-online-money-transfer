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

  errorMessage: string; 

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private loginService: UserLoginService,
  ) {

    this.userForm = this.fb.group({
      msisdn: [ '', Validators.required ], 
      pin: ['', Validators.required ],
      languageId: 1
    })

   }

  ngOnInit(): void {
  }


  toggleLanguage(language) {

    this.isEngLangActive = !this.isEngLangActive; 
    // this.translateService.use(language)

  
  }; 


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
          // * * * Error * * * *  
          if ( !data['isSuccess'] ) {

            this.isError = true; 
            this.isSubmited = false;
            this.errorMessage = data['errorMessage']
          // * * * *  Success * * * *  

          } else { 
            this.isError = false;
            this.isSubmited = false;

            // * * * Save user info in Local Stroge * * * * 
            localStorage.setItem('sessionId', data['data']['sessionId']);
            localStorage.setItem('msisdn', userForm.value.msisdn );
            this.isEngLangActive ? localStorage.setItem('languageId', '2') : 
                                   localStorage.setItem('languageId', '1'); 

            // * * * Navigate to user profile * * * * * 
            this.router.navigate(['/user-profile/home']); 
          }
          console.log(data);
          
          
        }, err => console.log(err)); 
    

  }

}
