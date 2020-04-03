import { Component, OnInit } from '@angular/core';
import { UserProfileHomeService } from './user-profile-home.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-user-profile-home',
  templateUrl: './user-profile-home.component.html',
  styleUrls: ['./user-profile-home.component.scss']
})
export class UserProfileHomeComponent implements OnInit {

  userData: any[] = []; 

  constructor(
    private homeService: UserProfileHomeService,
    private utileService: UtileService
  ) { }

  ngOnInit(): void {

    this.getUserInfo(); 

  };
  
  
  getUserInfo() {
    const userInfo = {
      languageId: this.utileService.getUserLanguage(),
      msisdn: this.utileService.getUserPhone(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    console.log(userInfo);
    
    this.homeService
        .getUserInfo(userInfo)
        .subscribe( data => {

          this.userData = [data['data']]; 
          console.log(this.userData);
          
        }, err => console.log(err) )
  }; 



}
