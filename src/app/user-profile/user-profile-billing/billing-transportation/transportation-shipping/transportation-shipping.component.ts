import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transportation-shipping',
  templateUrl: './transportation-shipping.component.html',
  styleUrls: ['./transportation-shipping.component.scss']
})
export class TransportationShippingComponent implements OnInit {

  @Input() allData: any[] = [];

  shippingList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.shippingList = this.allData[0]; 
  }

}
