import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  apiURL: string = '/api/users/login'; 

  constructor(
    private http: HttpClient
  ) { 

  }; 


  userLogin(userForm: Object) {

    return this.http.post(this.apiURL, userForm); 
  }

}
