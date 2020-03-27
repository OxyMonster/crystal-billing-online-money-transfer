import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-night',
  templateUrl: './day-night.component.html',
  styleUrls: ['./day-night.component.scss']
})
export class DayNightComponent implements OnInit {

  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  isDay: boolean = false; 

  constructor() { }

  ngOnInit(): void {

  }; 


  toggleDayNight() {
    this.isDay = !this.isDay; 
    this.result.emit(this.isDay);

    
  }

}
