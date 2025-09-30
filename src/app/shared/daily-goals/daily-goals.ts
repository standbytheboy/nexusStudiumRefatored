import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Goals {
  name: string,
  subject: string
}

@Component({
  selector: 'app-daily-goals',
  imports: [CommonModule],
  templateUrl: './daily-goals.html',
  styleUrl: './daily-goals.css'
})
export class DailyGoals {
  @Input() goals: Goals[] = [];
}
