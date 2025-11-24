import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StoryPart {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;

  storyParts: StoryPart[] = [
    {
      title: 'The Accidental Employee',
      subtitle: 'A crush, an interview, and destiny',
      description: 'He showed up for a job interview, not to get the job, but to see his crush. Anyway, destiny loves playing with him; by the time he arrived, she was gone. So, what did he do? He went ahead and attended the interview anyway! We\'re not sure if the girl ever liked him, but the HR definitely did, and boom, he got the job, where he met the other two "so-called founders."',
      icon: '💼'
    },
    {
      title: 'The Designer Who Took a Detour',
      subtitle: 'From fashion to pixels',
      description: 'From designing clothes to designing apps, it\'s been one wild ride. Now, he picks colour palettes and crafts UI like a pro. His designs are so good that users almost forget the app even has bugs.',
      icon: '🎨'
    },
    {
      title: 'The "Bada Karna Hai" Guy',
      subtitle: 'Confidence without a plan',
      description: 'And then there\'s the CEO, the "Bhai log, mujhe life mein kuch bada karna hai" guy. He didn\'t know what that "bada" thing was, but he said it with such confidence that the other two jumped into business anyway. Leadership, baby!',
      icon: '🚀'
    },
    {
      title: 'The Unplanned Addition',
      subtitle: 'The chaos catalyst',
      description: 'Introducing the girl, the copywriter, and the social media specialist your brand dreams of. A friend of the hopeless romantic, and a stranger to the other two founders, she got pulled into this fun chaos through a five-minute phone call.',
      icon: '✍️'
    }
  ];

  ngOnInit() {
    this.scrollListener = () => {
      const cards = document.querySelectorAll('.story-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;

        if (isVisible) {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateX(0) rotateY(0)';
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
