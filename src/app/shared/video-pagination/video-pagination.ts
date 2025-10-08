import { Component, Input, OnInit } from '@angular/core'; // Importe OnInit
import { CommonModule } from '@angular/common';

// Importe os componentes e a interface necessários
import { ThumbVideo, ThumbVideos } from '../thumb-video/thumb-video';
import { Pagination } from '../../layout/pagination/pagination';

@Component({
  selector: 'app-video-pagination',
  standalone: true,
  imports: [CommonModule, ThumbVideos, Pagination],
  templateUrl: './video-pagination.html',
  styleUrls: ['./video-pagination.css']
})
export class VideoPagination implements OnInit { // Implemente OnInit
  
  // A lista de vídeos agora pertence a este componente
  public allVideos: ThumbVideo[] = [
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

  @Input() videosPorPagina: number = 8;

  public paginatedVideos: ThumbVideo[] = [];
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