import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telecoms-internet',
  templateUrl: './telecoms-internet.component.html',
  styleUrls: ['./telecoms-internet.component.scss']
})
export class TelecomsInternetComponent implements OnInit {

  @Input() allData: any[] = []; 

  internetList: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    
    this.internetList = this.allData[4]; 
    
  }

}
