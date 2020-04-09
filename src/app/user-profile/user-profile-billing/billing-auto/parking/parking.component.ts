import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {


  @Input() parkingData: any[]; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.parkingData);
    
  }

}
