import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileHomeService {

  apiUrl:string = '/api/users/get-user-info'; 

  constructor(
    private http: HttpClient
  ) { 

  }

  getUserInfo(userInfo: any) {
    return this.http.post(this.apiUrl, userInfo ); 
  }; 
  
}
