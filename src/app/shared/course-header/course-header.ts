import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-header',
  imports: [CommonModule],
  templateUrl: './course-header.html',
  styleUrl: './course-header.css'
})
export class CourseHeader {
  title = 'Figma para iniciantes: Do básico ao avançado';
  rating = 4.7;
  videoCount = 22;
  duration = '4h 53min';
}
