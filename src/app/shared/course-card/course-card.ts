import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() progress: string = '';
}