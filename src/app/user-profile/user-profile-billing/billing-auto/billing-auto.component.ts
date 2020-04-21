import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DraftsService } from '../drafts.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faParking, faGavel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-billing-auto',
  templateUrl: './billing-auto.component.html',
  styleUrls: ['./billing-auto.component.scss', '../user-profile-drafts.component.scss']
}) 
export class DraftsAutoComponent implements OnInit {

  faParking = faParking; 
  faGavel = faGavel;


  languageId: string; 
  billersAlldata: any[] = []; 
  autosList: any[] = [];
  autosChildList: any[]; 
     

   
  modalTitle: string; 
  isParkingActive: boolean = false; 


  destroy: Subject<void> = new Subject<void>(); 

  constructor(
    private draftService: DraftsService,
    private utileService: UtileService,
    private modalService: NgbModal
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
                    
                    this.autosList.map( item => {
                      this.autosChildList = item['children']; 
                      
                    })
                  
                  }; 

                 }); 
                
                 console.log(this.autosList);
                 
        
               }, err => console.log(err) )
  }; 

  openModal(content, modalTitle:string, selectedCat: string) {
    
    // * * * Display selected Category * * * *
    selectedCat === 'ba_parking' ? this.isParkingActive = true : this.isParkingActive = false; 
    //* * * Modal Options * * * * 
    this.modalTitle = modalTitle; 
    this.modalService.open(content, { size: 'xl' });

  };

  


}
