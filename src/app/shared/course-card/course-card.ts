import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Courses {
  title: string,
  type: string,
  progress: string
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent {
  @Input() courses: Courses[] = [];
}