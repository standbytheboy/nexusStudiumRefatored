import { Component } from '@angular/core';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { Navigation } from '../../layout/navigation/navigation';
import { MainSection, MainInfoProps } from '../../shared/main-section/main-section';
import { CommonModule } from '@angular/common';
import { ExerciseCard } from '../../shared/exercise-card/exercise-card';

@Component({
  selector: 'app-exercises',
  imports: [SearchBar, Navigation, MainSection, CommonModule, ExerciseCard],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css',
})
export class Exercises {
  public mainExercise: MainInfoProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      hitPercentage: 10,
    },
  ];
}
