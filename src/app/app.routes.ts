import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { YourContributions } from './pages/your-contributions/your-contributions';
import { Course } from './pages/course/course';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redireciona a rota raiz para o dashboard
  { path: 'dashboard', component: Dashboard },
  { path: 'contributions', component: YourContributions },
  { path: 'course', component: Course }, 
  // { path: 'course/:id', component: Course },  --------------- Rota para um curso específico ---------------
];
