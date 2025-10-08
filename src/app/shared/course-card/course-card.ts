import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Course {
  title: string;
  type: string;
  progress: string;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCard {
  @Input() course: Course | null = null;
}