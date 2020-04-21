import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilities-water',
  templateUrl: './utilities-water.component.html',
  styleUrls: ['./utilities-water.component.scss']
})
export class UtilitiesWaterComponent implements OnInit {

  @Input() allData: any[] = []; 

  allWaterData: any[] = []; 
  constructor() { }

  ngOnInit(): void {

    this.allWaterData = this.allData[2]; 
  }

}
