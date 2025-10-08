import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar";
import { YourContributions } from "./pages/your-contributions/your-contributions";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Articles } from "./shared/articles/articles";
import { ThumbVideos } from "./shared/thumb-video/thumb-video";
import { Pagination } from "./layout/pagination/pagination";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, YourContributions, Dashboard, Articles, ThumbVideos, Pagination],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexus');
  paginaAtual = 1;

  // Este método será chamado quando o evento 'paginaAlterada' for emitido
  onPageChange(novaPagina: number): void {
    this.paginaAtual = novaPagina;
    console.log('Carregar dados da página:', novaPagina);
  }
}