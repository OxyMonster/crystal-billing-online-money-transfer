import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faBolt, faBurn, faHandHoldingWater, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-drafts-utilities',
  templateUrl: './billing-utilities.component.html',
  styleUrls: ['./billing-utilities.component.scss', '../user-profile-drafts.component.scss']
})
export class DraftsUtilitiesComponent implements OnInit {

  //  * * * Icons * * * *
  faBolt = faBolt;
  faBurn = faBurn; 
  faHandHoldingWater = faHandHoldingWater; 
  faTrash = faTrash; 

  //  * * * / * * * 
  languageId: string; 
  billersAlldata: any[] = []; 
  utilitiesList: any[] = [];  

  modalTitle: string; 

  categories = {
    electricity: false, 
    gas: false, 
    wasteRemoval: false, 
    water: false
  }; 

  utilsChildList: any[] = []; 


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

                  if (item['name'] === 'b_utilities' ) {
                    this.utilitiesList = item['children']; 
                    this.utilsChildList = this.utilitiesList.map(item => item['children']); 
                    console.log(this.utilsChildList);
                    
                  }; 

                 }); 
                
                 console.log(this.utilitiesList);
                 
        
               }, err => console.log(err) )
  }; 


  openModal(modalContent: any, modalTitle: string, selectedCat: string) {

    this.modalTitle = modalTitle; 
    this.modalService.open(modalContent, { size: 'xl' }); 


    for ( const property in this.categories ) {
      
      this.categories[property] = false; 
    
    }; 
 
    switch (selectedCat) {
      case 'bu_gas' : this.categories.gas = true; 
        break;
      case 'bu_electricity' : this.categories.electricity = true;
        break; 
      case 'bu_water' : this.categories.water = true; 
        break; 
      case 'bu_trash' : this.categories.wasteRemoval = true; 

    }; 




  }



}
