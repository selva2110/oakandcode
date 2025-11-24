import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;

  features: Feature[] = [
    {
      title: 'Innovation First',
      description: 'We blend cutting-edge technology with creative thinking to deliver solutions that stand out.',
      icon: '⚡'
    },
    {
      title: 'Client-Centric',
      description: 'Your vision drives our mission. We collaborate closely to transform ideas into reality.',
      icon: '🎯'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every pixel, every line of code is crafted with precision and attention to detail.',
      icon: '✨'
    },
    {
      title: 'Agile & Adaptive',
      description: 'Fast-paced development with flexibility to evolve alongside your business needs.',
      icon: '🚀'
    }
  ];

  ngOnInit() {
    this.scrollListener = () => {
      const features = document.querySelectorAll('.feature-card');
      features.forEach((feature, index) => {
        const rect = feature.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          (feature as HTMLElement).style.opacity = '1';
          (feature as HTMLElement).style.transform = 'translateY(0) rotateX(0)';
        }
      });
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}
