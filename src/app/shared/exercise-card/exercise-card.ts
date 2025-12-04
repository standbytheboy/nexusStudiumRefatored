import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from "../card/card";
import { ContentItem } from '../../models/content-item/content-item-module';

@Component({
  selector: 'app-exercise-card',
  imports: [CommonModule, Card],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.css'
})
export class ExerciseCard {
  public exerciseInfo: ContentItem[] = [
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      title: 'Dicas de Como se Tornar um Bom Lider',
      subtitle: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      title: 'Figma: Dicas Essenciais para Iniciantes',
      subtitle: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      image: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },

  ]
}
