import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [CardModule, ButtonModule, ],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent {
  quizzes = [
    {
      title: 'Front-end Web Development',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=Front-end+Web+Development',
    },
    {
      title: 'Android Development',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=Android+Development',
    },
    {
      title: 'Flutter Development',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=Flutter+Development',
    },
    {
      title: 'UI & UX Design',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=UI+%26+UX+Design',
    },
    {
      title: 'AI & ML Development',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=AI+%26+ML+Development',
    },
    {
      title: 'Back-End Web Development',
      description: 'Voluptatem aut ut dignissimos blanditiis',
      image: 'https://via.placeholder.com/300x200?text=Back-End+Web+Development',
    },
  ];
  
}
