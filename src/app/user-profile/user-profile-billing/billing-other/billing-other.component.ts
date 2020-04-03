import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { DraftsService } from '../drafts.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drafts-other',
  templateUrl: './billing-other.component.html',
  styleUrls: ['./billing-other.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsOtherComponent implements OnInit {

  
  languageId: string; 
  billersAlldata: any[] = []; 
  othersList: any[] = [];  


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
  ) { }

  ngOnInit(): void {
        
    this.languageId = this.utileService.getUserLanguage();
    this.getEntertaimentList(); 
  }; 

  getEntertaimentList() {    
    return this.draftService
               .getBillers(this.languageId)
               .pipe( takeUntil(this.destroy) )
               .subscribe( data => {
                   
                 
                 this.billersAlldata = data['data']; 
                 const billersCategoryList = this.billersAlldata.map(item => item.children )[0];

                 billersCategoryList.map( item =>  {

                  if (item['name'] === 'b_other' ) {
                    this.othersList = item['children']; 
                  }; 

                 }); 
                
                 console.log(this.othersList);
                 
        
               }, err => console.log(err) )
  }; 
}
