import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drafts-education',
  templateUrl: './billing-education.component.html',
  styleUrls: ['./billing-education.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsEducationComponent implements OnInit {
  
  languageId: string; 
  billersAlldata: any[] = []; 
  educationsList: any[] = [];  


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
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
                 const billersCategoryList = this.billersAlldata.map(item => item.children )[0];

                 billersCategoryList.map( item =>  {

                  if (item['name'] === 'b_education' ) {
                    this.educationsList = item['children']; 
                  }

                 }); 
                
                 console.log(this.educationsList);
                 
        
               }, err => console.log(err) )
  }; 

}
