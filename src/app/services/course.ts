import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'; // Usa Observables para dados assíncronos

import { Course } from '../shared/course-card/course-card';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private inProgressCourses: Course[] = [
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
  ];

  constructor() { }

  // Método que retorna os dados como um Observable
  getInProgressCourses(): Observable<Course[]> {
    return of(this.inProgressCourses);
  }
}
