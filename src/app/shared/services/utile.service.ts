import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor(
    private router: Router
  ) { }

  getUserPhone() {
    return localStorage.getItem('msisdn'); 
  };

  getUserLanguage() {
    return localStorage.getItem('languageId'); 
  }

  isLoggedIn() {
    return !!localStorage.getItem('sessionId'); 
  }; 

  logOut() {
    this.router.navigate(['/login']); 
    return localStorage.removeItem('sessionId');

  }; 
  
}
