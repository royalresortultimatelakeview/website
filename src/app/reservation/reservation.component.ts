import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  room_count: any;

  constructor() {
    this.room_count = [];
    for (var i = 1; i < 21; i++) {
      this.room_count.push(i);
    }
  }

  ngOnInit(): void {}
}
