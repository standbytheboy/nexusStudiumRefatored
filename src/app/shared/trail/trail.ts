import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Video {
  title: string;
  duration: string;
  completed: boolean;
}

export interface Module {
  title: string;
  videos: Video[];
  isCollapsed: boolean;
}

@Component({
  selector: 'app-trail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trail.html',
  styleUrls: ['./trail.css']
})
export class Trail {
  // Lista de exemplo com a estrutura de módulos e vídeos
  modules: Module[] = [
    {
      title: 'Primeiros Passos',
      videos: [
        { title: 'Introdução ao Curso', duration: '10 min', completed: true },
        { title: 'O que é UX Design?', duration: '15 min', completed: true },
        { title: 'Ferramentas Essenciais', duration: '25 min', completed: false },
      ],
      isCollapsed: false
    },
    {
      title: 'Pesquisa e Descoberta',
      videos: [
        { title: 'Conduzindo Entrevistas', duration: '30 min', completed: false },
        { title: 'Análise Competitiva', duration: '20 min', completed: false },
      ],
      isCollapsed: true
    },
    {
      title: 'Prototipação e Testes',
      videos: [
        { title: 'Protótipos de Baixa Fidelidade', duration: '40 min', completed: false },
        { title: 'Testes de Usabilidade', duration: '35 min', completed: false },
      ],
      isCollapsed: true
    }
  ];

  toggleModule(module: Module): void {
    module.isCollapsed = !module.isCollapsed;
  }
}