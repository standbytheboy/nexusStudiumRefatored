import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InfoProps {
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead?: number;
  hitPercentage?: number;
  answerCount?: number;
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
