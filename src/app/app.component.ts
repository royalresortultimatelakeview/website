import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBottom=false;
  title = 'royal-resort';

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isBottom = true;
    } else {
      this.isBottom = false;
    }
  }

  goToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
