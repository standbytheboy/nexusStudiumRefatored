import { Component } from '@angular/core';
import { MainInfoProps, MainSection } from "../main-section/main-section";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-article',
  imports: [MainSection, CommonModule],
  templateUrl: './main-article.html',
  styleUrl: './main-article.css'
})
export class MainArticle {
  public articleInfo: MainInfoProps[] = [
      {
        image: "https://images.unsplash.com/photo-1750785354752-2c234b875cdd",
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        minutesToRead: 10
      },
  ]
}
