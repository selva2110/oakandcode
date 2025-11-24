import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  animationComplete = false;
  private scrollListener?: () => void;

  ngOnInit() {
    setTimeout(() => {
      this.animationComplete = true;
    }, 2000);

    this.scrollListener = () => {
      const header = document.querySelector('app-header') as HTMLElement;
      if (header) {
        const scrolled = window.scrollY;
        if (scrolled > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}
