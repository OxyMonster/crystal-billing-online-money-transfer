import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilities-electricity',
  templateUrl: './utilities-electricity.component.html',
  styleUrls: ['./utilities-electricity.component.scss']
})
export class UtilitiesElectricityComponent implements OnInit {

  @Input() allData: any[] = []; 
  
  allElectricityData: any[] = []; 


  
  constructor() { }

  ngOnInit(): void {

    this.allElectricityData = this.allData[1]; 
  }

}
