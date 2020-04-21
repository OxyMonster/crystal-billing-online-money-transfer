import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transportation-travel',
  templateUrl: './transportation-travel.component.html',
  styleUrls: ['./transportation-travel.component.scss']
})
export class TransportationTravelComponent implements OnInit {

  @Input() allData: any[] = []; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
