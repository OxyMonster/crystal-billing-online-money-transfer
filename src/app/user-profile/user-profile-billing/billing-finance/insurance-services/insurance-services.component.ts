import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-services',
  templateUrl: './insurance-services.component.html',
  styleUrls: ['./insurance-services.component.scss']
})
export class InsuranceServicesComponent implements OnInit {


  @Input() allData: any[] = []; 

  insurancesList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.insurancesList = this.allData[2]; 

  }

}
