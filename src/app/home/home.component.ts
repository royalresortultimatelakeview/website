import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  header_image_count = 1;

  ngOnInit(): void {
    interval(2500).subscribe((x) => {
      if (this.header_image_count < 4) {
        this.header_image_count++;
      } else {
        this.header_image_count = 1;
      }
    });
  }
}
