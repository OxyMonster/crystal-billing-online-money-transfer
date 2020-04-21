import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {


  passwodrForm: FormGroup; 

  constructor(fb: FormBuilder) { 
    
    this.passwodrForm = fb.group({
      oldPassword: [ '', Validators.required ],
      newPassword: [ '', Validators.required, ],
      confirmPassword: [ '', Validators.required, ]

    })
  }

  ngOnInit(): void {

  }


  onSubmit(passwodrForm){
    console.log(passwodrForm.value);
    
    
  }

}
