import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from '../../models/content-item/content-item-module';
import { Card } from '../card/card';

@Component({
  selector: 'app-popular-courses',
  imports: [CommonModule, Card],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.css',
})
export class PopularCourses {
  public thumbCourse: ContentItem[] = [
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 15
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },

    {
      bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 8
    }
  ];
}
