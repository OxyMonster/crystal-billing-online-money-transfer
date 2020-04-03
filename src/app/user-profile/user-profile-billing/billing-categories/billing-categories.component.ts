import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UtileService } from 'src/app/shared/services/utile.service';
import { DraftsService } from '../drafts.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drafts-categories',
  templateUrl: './billing-categories.component.html',
  styleUrls: ['./billing-categories.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsCategoriesComponent implements OnInit {


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
