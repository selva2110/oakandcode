import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;

  ngOnInit() {
    this.scrollListener = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector('.hero-section') as HTMLElement;
      if (hero) {
        const opacity = Math.max(0, 1 - scrolled / 800);
        const scale = Math.max(0.8, 1 - scrolled / 2000);
        hero.style.opacity = opacity.toString();
        hero.style.transform = `scale(${scale})`;
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
