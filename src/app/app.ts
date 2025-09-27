import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard";
import { SidebarComponent } from "./layout/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexus');
}
