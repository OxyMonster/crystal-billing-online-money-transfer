import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telecoms-phone-fixed',
  templateUrl: './telecoms-phone-fixed.component.html',
  styleUrls: ['./telecoms-phone-fixed.component.scss']
})
export class TelecomsPhoneFixedComponent implements OnInit {

  @Input() allData: any[] = []; 

  fixedPhonesList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.fixedPhonesList = this.allData[1]; 

  }

}
