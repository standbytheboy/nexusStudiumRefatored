import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagination } from '../../layout/pagination/pagination';
import { Card } from '../card/card';
import { ContentItem } from '../../models/content-item/content-item-module';
import { getAvatarByIndex, getImageByIndex } from '../data/mock-data';

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
      image: getImageByIndex(0),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(0),
      minutesToRead: 10
    },
    {
      image: getImageByIndex(1),
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: getAvatarByIndex(1),
      minutesToRead: 8
    },
    {
      image: getImageByIndex(2),
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(2),
      minutesToRead: 15
    },
    {
      image: getImageByIndex(3),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(3),
      minutesToRead: 10
    },
    {
      image: getImageByIndex(4),
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: getAvatarByIndex(4),
      minutesToRead: 8
    },
    {
      image: getImageByIndex(5),
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(5),
      minutesToRead: 15
    },
    {
      image: getImageByIndex(6),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(6),
      minutesToRead: 10
    },
    {
      image: getImageByIndex(7),
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: getAvatarByIndex(7),
      minutesToRead: 8
    },
    {
      image: getImageByIndex(8),
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(1),
      minutesToRead: 15
    },
    {
      image: getImageByIndex(9),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(2),
      minutesToRead: 10
    },
    {
      image: getImageByIndex(10),
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: getAvatarByIndex(3),
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