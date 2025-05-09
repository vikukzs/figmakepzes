import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarNavigationComponent} from './sidebar/sidebar-navigation/sidebar-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNavigationComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figmakepzes';
}
