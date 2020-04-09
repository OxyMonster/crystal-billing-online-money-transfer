import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telecoms-phone-mobile',
  templateUrl: './telecoms-phone-mobile.component.html',
  styleUrls: ['./telecoms-phone-mobile.component.scss']
})
export class TelecomsPhoneMobileComponent implements OnInit {

  @Input() allData: any[] = []; 

  mobilesList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.mobilesList = this.allData[2]; 
  }; 

}
