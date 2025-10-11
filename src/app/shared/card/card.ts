import { Component, Input } from '@angular/core';
import { ContentItem } from '../../models/content-item/content-item-module';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() info: ContentItem | null = null;
  @Input() layout: 'main' | 'info' = 'info'; // criado para controlar se a seção vai ser main ou section
}
