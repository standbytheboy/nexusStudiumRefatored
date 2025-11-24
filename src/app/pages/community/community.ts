import { Component } from '@angular/core';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { Navigation } from '../../layout/navigation/navigation';
import { MainSection, MainInfoProps } from '../../shared/main-section/main-section';
import { CommonModule } from '@angular/common';
import { CommunityCard } from '../../shared/community-card/community-card';

@Component({
  selector: 'app-community',
  imports: [SearchBar, Navigation, MainSection, CommonModule, CommunityCard],
  templateUrl: './community.html',
  styleUrl: './community.css',
})
export class Community {
  public mainQuestion: MainInfoProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1750785354752-2c234b875cdd',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
  ];
}
