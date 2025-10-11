import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-player',
  imports: [CommonModule],
  templateUrl: './course-player.html',
  styleUrl: './course-player.css'
})
export class CoursePlayer {
  course = {
    title: 'Tour Pela Interface',
    author: 'Lucas Morais',
    authorAvatar: 'https://i.pravatar.cc/150',
    rating: 4.9,
    level: 'Básico',
    studentCount: '1,700',
    videoThumbnail: 'https://images.unsplash.com/photo-1668095736408-19144e4c05e4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    learningPoints: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };

  activeTab: 'overview' | 'resources' | 'reviews' = 'overview';

  selectTab(tab: 'overview' | 'resources' | 'reviews'): void {
    this.activeTab = tab;
  }
}
