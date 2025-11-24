import { Component } from '@angular/core';
import { SearchBar } from '../../layout/search-bar/search-bar';
import { Navigation } from '../../layout/navigation/navigation';
import { CommonModule } from '@angular/common';
import { VideoPagination } from "../../shared/video-pagination/video-pagination";
import { PopularCourses } from "../../shared/popular-courses/popular-courses";

@Component({
  selector: 'app-courses',
  imports: [SearchBar, Navigation, CommonModule, VideoPagination, PopularCourses],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

}
