import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})
export class Pagination implements OnChanges {
  // --- Entradas (Inputs) ---
  @Input() totalDePaginas: number = 1;
  @Input() paginaAtual: number = 1;

  // --- Saída (Output) ---
  @Output() paginaAlterada = new EventEmitter<number>();

  public paginas: number[] = [];

  // Este método é chamado sempre que um @Input() muda.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalDePaginas']) {
      this.paginas = this.criarArrayDePaginas();
    }
  }

  private criarArrayDePaginas(): number[] {
    // Cria um array de números [1, 2, 3, ..., totalDePaginas]
    return Array.from({ length: this.totalDePaginas }, (_, i) => i + 1);
  }

  mudarPagina(novaPagina: number): void {
    if (novaPagina >= 1 && novaPagina <= this.totalDePaginas) {
      this.paginaAlterada.emit(novaPagina);
    }
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalDePaginas) {
      this.mudarPagina(this.paginaAtual + 1);
    }
  }
}