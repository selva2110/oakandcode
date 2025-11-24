import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern shopping experience with seamless checkout and real-time inventory',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'FinTech Mobile App',
      category: 'App Development',
      description: 'Secure financial management with intuitive UI and powerful analytics',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      description: 'Patient management system with data visualization and appointment scheduling',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Social Networking Platform',
      category: 'Full Stack',
      description: 'Community-driven platform with real-time messaging and content sharing',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'AI-Powered Analytics',
      category: 'Web Application',
      description: 'Business intelligence tool with machine learning insights and predictions',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Education Portal',
      category: 'Learning Management',
      description: 'Interactive learning platform with video streaming and progress tracking',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  ngOnInit() {
    this.scrollListener = () => {
      const projects = document.querySelectorAll('.project-card');
      projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top / window.innerHeight);

        if (scrollProgress > 0 && scrollProgress < 1) {
          (project as HTMLElement).style.opacity = Math.min(scrollProgress * 2, 1).toString();
          (project as HTMLElement).style.transform = `translateY(${(1 - scrollProgress) * 100}px) scale(${0.8 + scrollProgress * 0.2})`;
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
