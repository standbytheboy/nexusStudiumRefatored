import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hours-summary',
  standalone: true,
  templateUrl: './hours-summary.html',
  styleUrls: ['./hours-summary.css']
})
export class HoursSummaryComponent {
  @Input() totalHours: number = 0;
}