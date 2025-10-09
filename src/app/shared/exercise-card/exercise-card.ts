import { Component } from '@angular/core';
import { InfoProps, InfoSection } from "../info-section/info-section";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-card',
  imports: [InfoSection, CommonModule],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.css'
})
export class ExerciseCard {
  public exerciseInfo: InfoProps[] = [
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      {
        title: 'Dicas de Como se Tornar um Bom Lider',
        subtitle: 'Dicas de Como se Tornar um Bom Lider',
        author: 'Leandro Silva',
        authorRole: 'Designer UX',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728', 
        hitPercentage: 15
      },
      {
        title: 'Figma: Dicas Essenciais para Iniciantes',
        subtitle: 'Figma: Dicas Essenciais para Iniciantes',
        author: 'Ana Clara',
        authorRole: 'Product Designer',
        authorAvatar: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
        hitPercentage: 10
      },
      
    ]
}
