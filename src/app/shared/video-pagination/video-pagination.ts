import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbVideo, ThumbVideos } from '../thumb-video/thumb-video';
import { Pagination } from '../../layout/pagination/pagination';

@Component({
  selector: 'app-video-pagination',
  standalone: true,
  imports: [CommonModule, ThumbVideos, Pagination],
  templateUrl: './video-pagination.html',
  styleUrls: ['./video-pagination.css']
})
export class VideoPagination implements OnChanges {
  @Input() allVideos: ThumbVideo[] = [];
  @Input() videosPorPagina: number = 3; // Quantos vídeos mostrar por página

  // --- Propriedades de Controle ---
  public paginatedVideos: ThumbVideo[] = [];
  public paginaAtual: number = 1;
  public totalDePaginas: number = 5;

  ngOnChanges(changes: SimpleChanges): void {
    // Se a lista de vídeos mudar, recalcula a paginação
    if (changes['allVideos']) {
      this.recalculatePagination();
    }
  }

  private recalculatePagination(): void {
    if (!this.allVideos || this.allVideos.length === 0) {
      this.totalDePaginas = 1;
      this.paginaAtual = 1;
    } else {
      // Calcula o total de páginas
      this.totalDePaginas = Math.ceil(this.allVideos.length / this.videosPorPagina);
    }
    // Atualiza os vídeos exibidos
    this.updatePaginatedVideos();
  }

  private updatePaginatedVideos(): void {
    // "Fatia" o array principal para pegar apenas os itens da página atual
    const startIndex = (this.paginaAtual - 1) * this.videosPorPagina;
    const endIndex = startIndex + this.videosPorPagina;
    this.paginatedVideos = this.allVideos.slice(startIndex, endIndex);
  }

  // Método chamado quando o componente de paginação emite um evento
  onPageChange(novaPagina: number): void {
    this.paginaAtual = novaPagina;
    this.updatePaginatedVideos();
  }
}