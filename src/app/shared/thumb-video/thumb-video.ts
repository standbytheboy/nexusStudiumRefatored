import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces para tipar os dados
export interface ThumbVideo {
  image: string;
  title: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead: number;
}

export interface Filter {
  name: string;
  count: number;
  active: boolean;
}

@Component({
  selector: 'app-thumb-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumb-video.html',
  styleUrls: ['./thumb-video.css']
})
export class ThumbVideos {

  @Input() video: ThumbVideo | null = null;
  // Dados de exemplo para os filtros
  filters: Filter[] = [
    { name: 'Todos', count: 34, active: true },
    { name: 'Liderança', count: 10, active: false },
    { name: 'Produtividade', count: 16, active: false },
    { name: 'Ferramentas', count: 8, active: false }
  ];

  // Dados de exemplo para os artigos
  thumbVideos: ThumbVideo[] = [
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
      minutesToRead: 15
    },
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 10
    },
    {
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      minutesToRead: 8
    }
  ];
}