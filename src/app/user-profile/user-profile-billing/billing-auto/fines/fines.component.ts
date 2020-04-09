import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fines',
  templateUrl: './fines.component.html',
  styleUrls: ['./fines.component.scss']
})
export class FinesComponent implements OnInit {

  @Input() finesData: any[]; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.finesData);
    
  }

}
