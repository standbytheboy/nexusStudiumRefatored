import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar";
import { YourContributions } from "./pages/your-contributions/your-contributions";
import { Dashboard } from "./pages/dashboard/dashboard";
import { ThumbVideos } from "./shared/thumb-video/thumb-video";
import { CourseCard } from "./shared/course-card/course-card";
import { VideoPagination } from "./shared/video-pagination/video-pagination";
import { PopularCourses } from "./shared/popular-courses/popular-courses";
import { InfoSection } from "./shared/info-section/info-section";
import { ArticleCard } from "./shared/article-card/article-card";
import { ExerciseCard } from "./shared/exercise-card/exercise-card";
import { CommunityCard } from "./shared/community-card/community-card";
import { MainArticle } from "./shared/main-article/main-article";
import { MainExercise } from "./shared/main-exercise/main-exercise";
import { MainCommunity } from "./shared/main-community/main-community";
import { Trail } from "./shared/trail/trail";
import { CourseHeader } from "./shared/course-header/course-header";
import { CoursePlayer } from "./shared/course-player/course-player";
import { CoursePage } from "./pages/course/course";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexus');
}
