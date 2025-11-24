import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' }
  ];

  quickLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Portfolio', url: '#' },
    { name: 'Contact', url: '#' }
  ];
}
