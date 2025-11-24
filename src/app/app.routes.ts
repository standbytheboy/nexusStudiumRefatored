import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { YourContributions } from './pages/your-contributions/your-contributions';
import { CoursePage } from './pages/course/course';
import { Articles } from './pages/articles/articles';
import { Exercises } from './pages/exercises/exercises';
import { Community } from './pages/community/community';
import { Courses } from './pages/courses/courses';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redireciona a rota raiz para o dashboard
  { path: 'dashboard', component: Dashboard },
  { path: 'contributions', component: YourContributions },
  { path: 'course', component: CoursePage },
  { path: 'articles', component: Articles },
  { path: 'exercises', component: Exercises },
  { path: 'community', component: Community },
  { path: 'courses', component: Courses },
  // { path: 'course/:id', component: Course },  --------------- Rota para um curso específico ---------------
];
