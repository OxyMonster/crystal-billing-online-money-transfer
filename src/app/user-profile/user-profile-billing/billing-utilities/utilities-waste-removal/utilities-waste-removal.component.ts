import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilities-waste-removal',
  templateUrl: './utilities-waste-removal.component.html',
  styleUrls: ['./utilities-waste-removal.component.scss']
})
export class UtilitiesWasteRemovalComponent implements OnInit {

  @Input() allData: any[] = []; 

  allTrashData: any[] = []; 

  constructor() { }

  ngOnInit(): void {
  
    this.allTrashData = this.allData[3]; 
  }

}
