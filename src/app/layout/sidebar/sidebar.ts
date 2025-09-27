import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  // Entradas para tornar o componente dinâmico
  @Input() userName: string = 'Fulano';
  @Input() userEmail: string = 'fulano@email.com';
  @Input() avatarUrl: string = 'https://i.pravatar.cc/150?u=a042581f4e29026704d'; // URL de avatar de exemplo
  @Input() totalHours: number = 122;

  // Para controlar qual link está ativo
  @Input() activeLink: string = 'Dashboard';
}