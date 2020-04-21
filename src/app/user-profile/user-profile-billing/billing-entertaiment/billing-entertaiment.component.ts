import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtileService } from 'src/app/shared/services/utile.service';
import { DraftsService } from '../drafts.service';
import { faDice, faDiceD20 } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-billing-entertaiment',
  templateUrl: './billing-entertaiment.component.html',
  styleUrls: ['./billing-entertaiment.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsEntertaimentComponent implements OnInit {

  faDice = faDice;
  faDiceD20 = faDiceD20;


  languageId: string; 
  billersAlldata: any[] = []; 
  entertaimentsList: any[] = [];  


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

                  if (item['name'] === 'b_entertainment' ) {
                    this.entertaimentsList = item['children']; 
                  }

                 }); 
                
                 console.log(this.entertaimentsList);
                 
        
               }, err => console.log(err) )
  }; 

}
