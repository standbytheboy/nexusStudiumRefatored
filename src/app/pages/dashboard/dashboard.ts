import { Component } from '@angular/core';
import { CourseCardComponent } from "../../shared/course-card/course-card";
import { FollowingList } from "../../shared/following-list/following-list";
import { DailyGoals } from "../../shared/daily-goals/daily-goals";
import { StudiedTopics } from "../../shared/studied-topics/studied-topics";
import { RecentExercisesComponent } from "../../shared/recent-exercises/recent-exercises";
import { SearchBar } from "../../layout/search-bar/search-bar";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [CourseCardComponent, FollowingList, DailyGoals, StudiedTopics, RecentExercisesComponent, SearchBar]
})
export class DashboardComponent {
  inProgressCourses = [
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' },
    { title: 'Design Digital', type: 'Trilha', progress: '1/3' }
  ];

  followedUsers = [
    { name: 'Leandro Silva', role: 'Designer UX', avatarUrl: 'assets/avatar-leandro.png' },
  ];

  dailyGoals = [
    { name: 'Nome da Meta', subject: 'Matéria' },
    { name: 'Nome da Meta', subject: 'Matéria' },
  ];

  studiedTopics = [
    { title: 'UX/UI Design', progress: '1/3' },
    { title: 'UX/UI Design', progress: '1/3' },
    { title: 'UX/UI Design', progress: '1/3' }
  ];

  recentExercises = [
    { date: '07/03/25', instructor: 'Nome do Instrutor', tag: 'UX/UI Design', description: 'Descrição do Exercício' },
  ];
}