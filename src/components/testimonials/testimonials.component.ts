import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId?: number;

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechVision Inc',
      quote: 'Oak & Code transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The team\'s unique blend of creativity and technical expertise is truly remarkable.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateLabs',
      quote: 'Working with Oak & Code was an absolute pleasure. They delivered a flawless mobile app that our users love. Their quirky team dynamic actually translates into brilliant, creative solutions.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'BrandWave',
      quote: 'The social media strategy and content they created for us was game-changing. Our engagement increased by 300%. Who knew a team born from missed dates could create such perfect campaigns?',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Thompson',
      position: 'Founder',
      company: 'StartupX',
      quote: 'Oak & Code didn\'t just build our product, they became part of our journey. Their maintenance and support have been exceptional. Best decision we ever made for our business.',
      avatar: '👨‍💼'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = window.setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
