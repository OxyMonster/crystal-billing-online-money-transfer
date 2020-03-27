import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor() { }

  getUserPhone() {
    return localStorage.getItem('msisdn'); 
  };

  isLoggedIn() {
    return !!localStorage.getItem('sessionId'); 
  }
  
}
