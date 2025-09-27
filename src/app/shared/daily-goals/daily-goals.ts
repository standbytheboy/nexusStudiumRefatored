import { Component, Input } from '@angular/core';

interface Goals {

}

@Component({
  selector: 'app-daily-goals',
  imports: [],
  templateUrl: './daily-goals.html',
  styleUrl: './daily-goals.css'
})
export class DailyGoals {
  @Input() goals: Goals[] = [];
}
