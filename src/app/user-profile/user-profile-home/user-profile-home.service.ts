import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileHomeService {

  apiUrl:string = '/api/users/'; 

  constructor(
    private http: HttpClient
  ) { 

  }

  getUserInfo(userInfo: any) {
    const userInfoUrl = 'get-user-info'
    return this.http.post(this.apiUrl + userInfoUrl, userInfo ); 
  }; 

  changePassword(userInfo: any) {
    const changePassUrl = 'users/update-own-password'
    return this.http.post(this.apiUrl + changePassUrl, userInfo); 
  }
  
}
