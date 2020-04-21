import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPassport, faShippingFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drafts-transportation',
  templateUrl: './billing-transportation.component.html',
  styleUrls: ['./billing-transportation.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsTransportationComponent implements OnInit {

  faShippingFast = faShippingFast; 
  faPassport = faPassport


  languageId: string; 
  billersAlldata: any[] = []; 
  transportationList: any[] = [];
  
  transChildList: any[] = []; 

  modalTitle: string; 

  categories = { 
    shipping: false, 
    travel: false
  }

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

                  if (item['name'] === 'b_transportation' ) {
                    this.transportationList = item['children']; 

                    this.transChildList = this.transportationList.map(item => item['children']); 
                    console.log(this.transChildList);
                    
                  }; 

                 }); 
                
                 console.log(this.transportationList);
                 
        
               }, err => console.log(err) )
  }; 


  openModal(modalContent: any, modalTitle: string, selectedCat: string) {

    this.modalTitle = modalTitle; 
    this.modalService.open(modalContent, { size: 'xl' }); 


    for (const property in this.categories) {
      
      this.categories[property] = false; 
    
    }; 

    switch (selectedCat) {
      case 'btr_shipment' : this.categories.shipping = true; 
        break;
      case 'btr_travel' : this.categories.travel = true; 
    
    };

  }

}
