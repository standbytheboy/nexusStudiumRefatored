import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { CourseCard, Course } from '../../shared/course-card/course-card';
import { Metric, MetricCard } from '../../shared/metric-card/metric-card';
import { ComparisonChartComponent } from '../../shared/comparison-chart/comparison-chart';
import { UserComment, UserCommentComponent } from '../../shared/user-comment/user-comment';

@Component({
  selector: 'app-your-contributions',
  standalone: true,
  imports: [
    CommonModule,
    SearchBar,
    CourseCard,
    MetricCard,
    ComparisonChartComponent,
    UserCommentComponent
  ],
  templateUrl: './your-contributions.html',
  styleUrls: ['./your-contributions.css']
})
export class YourContributions {
  // Dados para a seção de vídeos
  videoContributions: Course[] = [
    { title: 'Design Digital - Aula 7', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital - Aula 8', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital - Aula 9', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital - Aula 10', type: 'Trilha', progress: '1/3' },
  ];

  // Dados para os cards de métricas
  metrics: Metric[] = [
    { value: '3', label: 'Artigos', timeFrame: 'Na última semana', change: 30.5 },
    { value: '7', label: 'Perguntas Respondidas', timeFrame: 'Na última semana', change: 52 },
    { value: '0', label: 'Exercícios', timeFrame: 'Na última semana', change: -5 },
  ];

  // Dados para os comentários
  userComments: UserComment[] = [
    { date: '07/03/25', userName: 'Nome do Usuário', type: 'Vídeo' },
    { date: '07/03/25', userName: 'Nome do Usuário', type: 'Vídeo' },
    { date: '07/03/25', userName: 'Nome do Usuário', type: 'Vídeo' },
    { date: '07/03/25', userName: 'Nome do Usuário', type: 'Vídeo' },
  ];
}