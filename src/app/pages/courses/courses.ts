import { Component } from '@angular/core';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { SidebarComponent } from '../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { VideoPagination } from "../../shared/video-pagination/video-pagination";
import { PopularCourses } from "../../shared/popular-courses/popular-courses";

@Component({
  selector: 'app-courses',
  imports: [SearchBar, SidebarComponent, CommonModule, VideoPagination, PopularCourses],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

}
