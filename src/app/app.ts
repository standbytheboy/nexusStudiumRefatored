import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar";
import { YourContributions } from "./pages/your-contributions/your-contributions";
import { Dashboard } from "./pages/dashboard/dashboard";
import { ThumbVideos } from "./shared/thumb-video/thumb-video";
import { CourseCard } from "./shared/course-card/course-card";
import { VideoPagination } from "./shared/video-pagination/video-pagination";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, VideoPagination],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexus');
}
