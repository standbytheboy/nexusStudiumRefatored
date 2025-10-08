import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbCourse, ThumbCourseProps } from "../thumb-course/thumb-course";

@Component({
  selector: 'app-popular-courses',
  imports: [CommonModule, ThumbCourse],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.css',
})
export class PopularCourses {
  public thumbCourse: ThumbCourseProps[] = [
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
