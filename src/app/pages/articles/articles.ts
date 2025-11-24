import { Component } from '@angular/core';
import { SearchBar } from "../../layout/search-bar/search-bar";
import { Navigation } from "../../layout/navigation/navigation";
import { MainSection, MainInfoProps } from '../../shared/main-section/main-section';
import { CommonModule } from '@angular/common';
import { ArticleCard } from "../../shared/article-card/article-card";

@Component({
  selector: 'app-articles',
  imports: [SearchBar, Navigation, MainSection, CommonModule, ArticleCard],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
    public mainArticle: MainInfoProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1750785354752-2c234b875cdd',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10,
    },
  ];
}
