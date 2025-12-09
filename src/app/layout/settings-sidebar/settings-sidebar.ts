import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-settings-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './settings-sidebar.html',
  styleUrl: './settings-sidebar.css',
})
export class SettingsSidebar {
  @Input() userName: string = 'Fulano';
  @Input() userEmail: string = 'fulano@email.com';
  @Input() avatarUrl: string = 'https://i.pravatar.cc/150?u=a042581f4e29026704d';
  @Input() totalHours: number = 122;

  // Para controlar qual link está ativo
  @Input() activeLink: string = 'Dashboard';
}
