import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InfoProps {
  image: string;
  title: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead: number;
}

@Component({
  selector: 'app-info-section',
  imports: [CommonModule],
  templateUrl: './info-section.html',
  styleUrl: './info-section.css'
})
export class InfoSection {
  @Input() info: InfoProps | null = null;
}
