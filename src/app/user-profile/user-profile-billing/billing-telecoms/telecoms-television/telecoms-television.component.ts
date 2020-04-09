import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telecoms-television',
  templateUrl: './telecoms-television.component.html',
  styleUrls: ['./telecoms-television.component.scss']
})
export class TelecomsTelevisionComponent implements OnInit {


  @Input() allData: any[] = []; 

  televisionsList: any[] = []; 

  constructor() { }

  ngOnInit(): void {

    this.televisionsList = this.allData[3]; 
    
  }

}
