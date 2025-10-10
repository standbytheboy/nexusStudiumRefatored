import { Component } from '@angular/core';
import { Trail } from "../../shared/trail/trail";
import { CourseHeader } from "../../shared/course-header/course-header";
import { CoursePlayer } from "../../shared/course-player/course-player";
import { SidebarComponent } from "../../layout/sidebar/sidebar";
import { SearchBar } from "../../layout/search-bar/search-bar";

@Component({
  selector: 'app-course',
  imports: [Trail, CourseHeader, CoursePlayer, SidebarComponent, SearchBar],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {

}
