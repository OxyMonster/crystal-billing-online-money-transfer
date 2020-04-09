import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  @Input() allData: any[] = []; 

  banksData: any[] = [];  

  constructor() { }

  ngOnInit(): void {

    this.banksData = this.allData[0]; 
    console.log(this.banksData);
    
  }

}
