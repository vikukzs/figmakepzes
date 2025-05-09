import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarNavigationComponent} from './sidebar/sidebar-navigation/sidebar-navigation.component';
import {SearchBarComponent} from './sidebar/search-bar/search-bar.component';
import {UserProfileComponent} from './sidebar/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNavigationComponent, SearchBarComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figmakepzes';
}
