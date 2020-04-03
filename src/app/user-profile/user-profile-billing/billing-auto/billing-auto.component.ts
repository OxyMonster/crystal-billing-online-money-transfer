import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drafts-auto',
  templateUrl: './billing-auto.component.html',
  styleUrls: ['./billing-auto.component.scss', '../user-profile-drafts.component.scss']
}) 
export class DraftsAutoComponent implements OnInit {


  languageId: string; 
  billersAlldata: any[] = []; 
  autosList: any[] = [];  


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
  ) { }

  ngOnInit(): void {
        
    this.languageId = this.utileService.getUserLanguage();
    this.getAutos(); 
  }; 

  getAutos() {    
    return this.draftService
               .getBillers(this.languageId)
               .pipe( takeUntil(this.destroy) )
               .subscribe( data => {
                   
                 
                 this.billersAlldata = data['data']; 
                 const billersCategoryList = this.billersAlldata.map(item => item.children )[0];

                 billersCategoryList.map( item =>  {

                  if (item['name'] === 'b_auto' ) {
                    this.autosList = item['children']; 
                  }

                 }); 
                
                 console.log(this.autosList);
                 
        
               }, err => console.log(err) )
  }; 


}
