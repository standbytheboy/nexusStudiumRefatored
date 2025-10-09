import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MainInfoProps {
  image: string;
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
  selector: 'app-main-section',
  imports: [CommonModule],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css'
})
export class MainSection {
  @Input() info: MainInfoProps | null = null;
}
