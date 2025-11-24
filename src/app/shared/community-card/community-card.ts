import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { ContentItem } from '../../models/content-item/content-item-module';

@Component({
  selector: 'app-community-card',
  imports: [CommonModule, Card],
  templateUrl: './community-card.html',
  styleUrl: './community-card.css',
})
export class CommunityCard {
  public articleInfo: ContentItem[] = [
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 15,
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      answerCount: 10,
    },
  ];
}
