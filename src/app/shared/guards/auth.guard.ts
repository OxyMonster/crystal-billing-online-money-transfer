import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtileService } from '../services/utile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private utileSrvice: UtileService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if ( this.utileSrvice.isLoggedIn() ) {
        return true

    } else {
      
      this.router.navigate(['login']); 
      return false;
    
    }
  }
 
}
