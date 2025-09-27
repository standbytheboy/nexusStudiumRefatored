import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Exercise {
  date: string;
  instructor: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'app-recent-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-exercises.html',
  styleUrls: ['./recent-exercises.css']
})
export class RecentExercisesComponent {
  @Input() exercises: Exercise[] = [];
}