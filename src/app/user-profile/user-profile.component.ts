import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isDay: boolean =  true; 

  constructor() { }

  ngOnInit(): void {

  }


  getisDayOrNight(e: boolean) {
    this.isDay = e;

    this.isDay ? localStorage.setItem('mode', 'day') : localStorage.setItem('mode', 'night'); 
  }

}
