import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ServicesComponent } from './components/services/services.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    WhyChooseUsComponent,
    OurStoryComponent,
    ServicesComponent,
    OurWorkComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <app-header />
      <app-hero />
      <app-why-choose-us />
      <app-our-story />
      <app-services />
      <app-our-work />
      <app-testimonials />
      <app-footer />
    </div>
  `,
})
export class App {}

bootstrapApplication(App);
