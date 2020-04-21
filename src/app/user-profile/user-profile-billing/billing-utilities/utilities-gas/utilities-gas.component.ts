import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilities-gas',
  templateUrl: './utilities-gas.component.html',
  styleUrls: ['./utilities-gas.component.scss']
})
export class UtilitiesGasComponent implements OnInit {

  @Input() allData: any[] = []; 

  allGasList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.allGasList = this.allData[0]; 
    
  }

}
