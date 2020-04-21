import { Component, OnInit } from '@angular/core';
import { UserProfileHomeService } from './user-profile-home.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile-home',
  templateUrl: './user-profile-home.component.html',
  styleUrls: ['./user-profile-home.component.scss']
})
export class UserProfileHomeComponent implements OnInit {

  userData: any[] = []; 

  constructor(
    private homeService: UserProfileHomeService,
    private utileService: UtileService,
    private router: Router,
    private modalService: NgbModal
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


  routeToSelectedCategory(categoryName: string) {

    switch ( categoryName ) {
      case 'bills' : this.router.navigate(['/user-profile/drafts/categories'])
        break;
      case 'transactions' : this.router.navigate(['/user-profile/transactions/categories']); 
        break; 
        
    }; 
    
  }; 


  openModal(content) {
    this.modalService.open(content, {size: 'xl'})
  }


}
