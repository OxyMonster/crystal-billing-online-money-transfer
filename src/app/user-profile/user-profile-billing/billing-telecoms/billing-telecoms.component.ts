import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-drafts-telecoms',
  templateUrl: './billing-telecoms.component.html',
  styleUrls: ['./billing-telecoms.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsTelecomsComponent implements OnInit {

  languageId: string; 
  billersAlldata: any[] = []; 
  telecomsList: any[] = [];  

  modalTitle: string; 

  categories = {
    companies: false,
    phoneFixed: false, 
    phoneMobile: false, 
    tv: false,
    internet: false,

  }; 

  telecomsChildList: any[] = []; 


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

                  if (item['name'] === 'b_telecoms' ) {

                    this.telecomsList = item['children']; 
                    this.telecomsChildList = this.telecomsList.map( item => item['children'] ); 

                    console.log(this.telecomsChildList);
                    
                  }; 

                 }); 
                
                 console.log(this.telecomsList);
                 
        
               }, err => console.log(err) )
  };
  
  


  openModal(modalContent: any, modalTitle: string, selectedCat: string) {

    this.modalTitle = modalTitle;
    this.modalService.open(modalContent, { size: 'xl' }); 

    //  * * * Clear * * * 
    for ( const property in this.categories ) {
      
      this.categories[property] = false; 
    
    }; 

    switch (selectedCat) {
      case 'bt_companies' : this.categories.companies = true; 
        break;
      case 'bt_phone_fixed' : this.categories.phoneFixed = true; 
        break;
      case 'bt_phone_mobile' : this.categories.phoneMobile = true; 
        break;
      case 'bt_tv' : this.categories.tv = true; 
        break;
      case 'bt_internet' : this.categories.internet = true; 
        break;
     
    }

  }

}
