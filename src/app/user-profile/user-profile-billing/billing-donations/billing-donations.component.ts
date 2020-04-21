import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtileService } from 'src/app/shared/services/utile.service';
import { DraftsService } from '../drafts.service';
import { takeUntil } from 'rxjs/operators';
import { faHandHoldingHeart, faPray, faPeace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drafts-donations',
  templateUrl: './billing-donations.component.html',
  styleUrls: ['./billing-donations.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsDonationsComponent implements OnInit {

  faHandHoldingHeart = faHandHoldingHeart; 
  faPray = faPray; 
  faPeace = faPeace;

  languageId: string; 
  billersAlldata: any[] = []; 
  donationsList: any[] = [];  


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
  ) { }

  ngOnInit(): void {

    this.languageId = this.utileService.getUserLanguage();

    this.getBillers(); 

  }


  getBillers() {    
    return this.draftService
               .getBillers(this.languageId)
               .pipe( takeUntil(this.destroy) )
               .subscribe( data => {
                   
                 
                 this.billersAlldata = data['data']; 
                 const billersCategoryList = this.billersAlldata.map(item => item.children )[0];

                 billersCategoryList.map( item =>  {

                  if (item['name'] === 'b_donations' ) {
                    this.donationsList = item['children']; 
                  }

                 }); 
                
                 console.log(this.donationsList);
                 
        
               }, err => console.log(err) )
  }; 

}
