import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;

  services: Service[] = [
    {
      title: 'Web Development',
      desc: 'Building responsive, performant websites',
      icon: '🌐'
    },
    {
      title: 'Application Development',
      desc: 'Cross-platform mobile & desktop apps',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centred design and prototyping',
      icon: '🎨'
    },
    {
      title: 'Product Maintenance',
      desc: 'Reliable support & continuous improvement',
      icon: '🔧'
    },
    {
      title: 'Social Media Optimisation',
      desc: 'Creative Content Strategy & Writing (Print & Digital)',
      icon: '📢'
    }
  ];

  ngOnInit() {
    this.scrollListener = () => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0) rotateX(0) scale(1)';
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
