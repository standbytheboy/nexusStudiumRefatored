import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Metric {
  value: string;
  label: string;
  timeFrame: string;
  change: number; // Positivo ou negativo
}

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.html',
  styleUrls: ['./metric-card.css']
})
export class MetricCard {
  @Input() metric: Metric | null = null;
}