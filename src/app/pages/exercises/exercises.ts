import { Component } from '@angular/core';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { SidebarComponent } from '../../layout/sidebar/sidebar';
import { MainSection, MainInfoProps } from '../../shared/main-section/main-section';
import { CommonModule } from '@angular/common';
import { ExerciseCard } from '../../shared/exercise-card/exercise-card';
import { getAvatarByIndex, getImageByIndex } from '../../shared/data/mock-data';

@Component({
  selector: 'app-exercises',
  imports: [SearchBar, SidebarComponent, MainSection, CommonModule, ExerciseCard],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css',
})
export class Exercises {
  public mainExercise: MainInfoProps[] = [
    {
      image: getImageByIndex(0),
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(0),
      hitPercentage: 10,
    },
  ];
}
