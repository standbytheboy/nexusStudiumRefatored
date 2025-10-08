import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ThumbCourseProps {
  image: string;
  title: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead: number;
}

@Component({
  selector: 'app-thumb-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumb-course.html',
  styleUrls: ['./thumb-course.css']
})
export class ThumbCourse {
  // Dados de exemplo para os artigos
  thumbCourse: ThumbCourseProps[] = [
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