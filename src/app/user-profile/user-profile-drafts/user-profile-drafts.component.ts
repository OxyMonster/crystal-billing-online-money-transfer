import { Component, OnInit } from '@angular/core';
import { DraftsService } from './drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-drafts',
  templateUrl: './user-profile-drafts.component.html',
  styleUrls: ['./user-profile-drafts.component.scss']
})
export class UserProfileDraftsComponent implements OnInit {

  languageId: string; 
  billersAlldata: any[] = []; 
  billersCategoryList: any[] = []; 


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.languageId = this.utileService.getUserLanguage();

    this.getBillers(); 
  
  }; 

  getBillers() {    
    return this.draftService
               .getBillers(this.languageId)
               .pipe( takeUntil(this.destroy) )
               .subscribe( data => {
                   
                 
                 this.billersAlldata = data['data']; 
                 this.billersCategoryList = this.billersAlldata.map(item => item.children )[0];
                
                 console.log(this.billersCategoryList);
                 
        
               }, err => console.log(err) )
  }; 


  routeToCategory(categoryName: string) {

    const selectedCategory = categoryName.split('_')[1]; 

    this.router.navigate([`/user-profile/drafts/${selectedCategory}`]);
  }

}
