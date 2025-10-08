import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ThumbCourseProps {
  image: string;
  title: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead: number;
}

@Component({
  selector: 'app-thumb-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumb-course.html',
  styleUrls: ['./thumb-course.css']
})
export class ThumbCourse {
  @Input() course: ThumbCourseProps | null = null;
}