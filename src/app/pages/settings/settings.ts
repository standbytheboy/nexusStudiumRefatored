import { Component } from '@angular/core';
import { GeneralSettings } from "../../shared/general-settings/general-settings";
import { SidebarComponent } from "../../layout/sidebar/sidebar";
import { SearchBar } from "../../layout/search-bar/search-bar";

@Component({
  selector: 'app-settings',
  imports: [GeneralSettings, SidebarComponent, SearchBar],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

}
