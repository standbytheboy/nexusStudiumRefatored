import { Component } from '@angular/core';
import { GeneralSettings } from "../../shared/general-settings/general-settings";
import { SidebarComponent } from "../../layout/sidebar/sidebar";
import { SearchBar } from "../../layout/search-bar/search-bar";
import { SettingsSidebar } from "../../layout/settings-sidebar/settings-sidebar";

@Component({
  selector: 'app-settings',
  imports: [GeneralSettings, SidebarComponent, SearchBar, SettingsSidebar],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

}
