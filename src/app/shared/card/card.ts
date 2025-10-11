import { Component, Input } from '@angular/core';
import { ContentItem } from '../../models/content-item/content-item-module';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() info: ContentItem | null = null;
  @Input() layout: 'main' | 'info' = 'info';
}
