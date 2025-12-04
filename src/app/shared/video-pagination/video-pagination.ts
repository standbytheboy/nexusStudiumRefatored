import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagination } from '../../layout/pagination/pagination';
import { Card } from '../card/card';
import { ContentItem } from '../../models/content-item/content-item-module';

@Component({
  selector: 'app-video-pagination',
  standalone: true,
  imports: [CommonModule, Card, Pagination],
  templateUrl: './video-pagination.html',
  styleUrls: ['./video-pagination.css']
})
export class VideoPagination implements OnInit {

  public allVideos: ContentItem[] = [
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 8
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 8
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 8
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 15
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 10
    },
    {
      image: "https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987",
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: 'https://images.unsplash.com/photo-1764418659027-b1da026826ec?q=80&w=987',
      minutesToRead: 8
    },
  ];

  @Input() videosPorPagina: number = 6;

  public paginatedVideos: ContentItem[] = [];
  public paginaAtual: number = 1;
  public totalDePaginas: number = 1;

  // ngOnInit é executado uma vez quando o componente é inicializado
  ngOnInit(): void {
    this.recalculatePagination();
  }

  private recalculatePagination(): void {
    this.totalDePaginas = Math.ceil(this.allVideos.length / this.videosPorPagina);
    this.updatePaginatedVideos();
  }

  private updatePaginatedVideos(): void {
    const startIndex = (this.paginaAtual - 1) * this.videosPorPagina;
    const endIndex = startIndex + this.videosPorPagina;
    this.paginatedVideos = this.allVideos.slice(startIndex, endIndex);
  }

  onPageChange(novaPagina: number): void {
    this.paginaAtual = novaPagina;
    this.updatePaginatedVideos();
  }
}