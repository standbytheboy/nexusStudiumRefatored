import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { ContentItem } from '../../models/content-item/content-item-module';
import { getAvatarByIndex, getImageByIndex } from '../data/mock-data';

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
      authorAvatar: getAvatarByIndex(0),
      image: getImageByIndex(0),
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(1),
      image: getImageByIndex(1),
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(2),
      image: getImageByIndex(2),
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(3),
      image: getImageByIndex(3),
      minutesToRead: 15
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(4),
      image: getImageByIndex(4),
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(5),
      image: getImageByIndex(5),
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(6),
      image: getImageByIndex(6),
      minutesToRead: 15
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(7),
      image: getImageByIndex(7),
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(1),
      image: getImageByIndex(8),
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(2),
      image: getImageByIndex(9),
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(3),
      image: getImageByIndex(10),
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(4),
      image: getImageByIndex(11),
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(5),
      image: getImageByIndex(12),
      minutesToRead: 10
    },

  ]
}
