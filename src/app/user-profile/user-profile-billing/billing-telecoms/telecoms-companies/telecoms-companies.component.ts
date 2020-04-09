import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telecoms-companies',
  templateUrl: './telecoms-companies.component.html',
  styleUrls: ['./telecoms-companies.component.scss']
})
export class TelecomsCompaniesComponent implements OnInit {

  @Input() allData: any[] = []; 

  companiesList: any[] = []; 
  constructor() { }

  ngOnInit(): void {

    this.companiesList = this.allData[0]; 
  }

}
