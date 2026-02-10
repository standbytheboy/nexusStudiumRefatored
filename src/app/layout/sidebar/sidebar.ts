import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit {
  // Entradas para tornar o componente dinâmico
  @Input() userName: string = 'Fulano';
  @Input() userEmail: string = 'fulano@email.com';
  @Input() avatarUrl: string = 'https://i.pravatar.cc/150?u=a042581f4e29026704d';
  @Input() totalHours: number = 122;

  // Para controlar qual link está ativo
  @Input() activeLink: string = 'Dashboard';

  isOpen = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}