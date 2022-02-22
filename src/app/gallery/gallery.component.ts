import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  images = [
    {
      path: 'assets/images/gallery/exterior/childplayground.jpg',
      type: 'app',
      location: 'Childplay Ground',
    },
    {
      path: 'assets/images/gallery/exterior/garden_night_3.jpg',
      type: 'app',
      location: 'Garden At Night',
    },
    {
      path: 'assets/images/gallery/exterior/garden_night.jpg',
      type: 'app',
      location: 'Garden At Night',
    },
    {
      path: 'assets/images/gallery/exterior/garden_night2.jpg',
      type: 'app',
      location: 'Garden At Night',
    },
    {
      path: 'assets/images/gallery/exterior/garden.jpg',
      type: 'app',
      location: 'Garden',
    },
    {
      path: 'assets/images/gallery/exterior/garden2.jpg',
      type: 'app',
      location: 'Garden',
    },
    {
      path: 'assets/images/gallery/exterior/garden3.jpg',
      type: 'app',
      location: 'Garden',
    },
    {
      path: 'assets/images/gallery/exterior/location.jpg',
      type: 'app',
      location: 'Location',
    },
    {
      path: 'assets/images/gallery/exterior/main_building_night_2.jpg',
      type: 'app',
      location: 'Main Building At Night',
    },

    {
      path: 'assets/images/gallery/exterior/main_building_night.jpg',
      type: 'app',
      location: 'Main Building At Night',
    },

    {
      path: 'assets/images/gallery/exterior/main_building.jpg',
      type: 'app',
      location: 'Main Building ',
    },
    {
      path: 'assets/images/gallery/exterior/main_entry.jpg',
      type: 'app',
      location: 'Main Entry',
    },
    {
      path: 'assets/images/gallery/exterior/topview.jpg',
      type: 'app',
      location: 'Top View',
    },
    {
      path: 'assets/images/gallery/exterior/topview2.jpg',
      type: 'app',
      location: 'Top View',
    },
    {
      path: 'assets/images/gallery/exterior/topview3.jpg',
      type: 'app',
      location: 'Top View',
    },
    {
      path: 'assets/images/gallery/interior/room.jpg',
      type: 'card',
      location: 'Room',
    },
    {
      path: 'assets/images/gallery/interior/room2.jpg',
      type: 'card',
      location: 'Room',
    },
    {
      path: 'assets/images/gallery/interior/room4.jpg',
      type: 'card',
      location: 'Room',
    },
    {
      path: 'assets/images/gallery/interior/room5.jpg',
      type: 'card',
      location: 'Room',
    },

  ];
  constructor() {}

  ngOnInit() {
    this.images = this.shuffleArray(this.images);
  }

  shuffleArray(array: any) {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
