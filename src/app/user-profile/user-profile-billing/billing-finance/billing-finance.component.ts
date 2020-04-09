import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drafts-finance',
  templateUrl: './billing-finance.component.html',
  styleUrls: ['./billing-finance.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsFinanceComponent implements OnInit {

  
  languageId: string; 
  billersAlldata: any[] = []; 
  financesList: any[] = [];  

  modalTitle: string; 
  
  categories = {
    banks: false, 
    elMoney: false, 
    elServices: false,
    insuranceServices: false,
    microFinOrganizations: false
  }; 

  financeChildList: any[] = []; 



  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
    private modalService: NgbModal
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

                  if (item['name'] === 'b_finance' ) {
                    this.financesList = item['children']; 

                    this.financeChildList =  this.financesList.map( item => item['children'] ); 
                    console.log(this.financeChildList);
                    
                  }; 

                 }); 
                
                 console.log(this.financesList);
                 
        
               }, err => console.log(err) )
  }; 

  openModal(modalContent: any, modalTitle: string, selectedCategory: string) {
    
    this.modalTitle = modalTitle; 
    this.modalService.open(modalContent, {size: 'xl'}); 

    //  * * * Clear * * *  
    for ( const property in this.categories ) {
    
      this.categories[property] = false; 
    
    }; 
 

    switch (selectedCategory) {
      case 'bf_bank' : this.categories.banks = true
        break;
      case 'bf_microfinance' : this.categories.microFinOrganizations = true
        break;
      case 'bf_insurance' : this.categories.insuranceServices = true
        break;
      case 'bf_emoney' : this.categories.elMoney = true
        break;
      case 'bf_ecommerce' : this.categories.elServices = true
        break;

      }

  }
}
