import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-user-info-logout',
  templateUrl: './user-info-logout.component.html',
  styleUrls: ['./user-info-logout.component.scss']
})
export class UserInfoLogoutComponent implements OnInit {

  userPhone: string; 

  constructor(
    private utileService: UtileService
  ) { }

  ngOnInit(): void {

    this.userPhone =  this.utileService.getUserPhone(); 


  };
  
  
  signOut() {
    this.utileService.logOut();
  }




}
