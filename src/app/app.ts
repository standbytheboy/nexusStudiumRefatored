import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar";
import { YourContributions } from "./pages/your-contributions/your-contributions";
import { Dashboard } from "./pages/dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, YourContributions, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexus');
}
