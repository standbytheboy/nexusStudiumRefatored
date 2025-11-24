import { Component } from '@angular/core';
import { SearchBar } from "../../layout/search-bar/search-bar";
import { Navigation } from "../../layout/navigation/navigation";
import { MainSection, MainInfoProps } from '../../shared/main-section/main-section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  imports: [SearchBar, Navigation, MainSection, CommonModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
    public articleInfo: MainInfoProps[] = [
    {
      image: 'https://images.unsplash.com/photo-1750785354752-2c234b875cdd',
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
  ];
}
