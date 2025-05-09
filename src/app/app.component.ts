import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarNavigationComponent} from './sidebar/sidebar-navigation/sidebar-navigation.component';
import {SearchBarComponent} from './sidebar/search-bar/search-bar.component';
import {UserProfileComponent} from './sidebar/user-profile/user-profile.component';
import {HeaderSectionComponent} from './component/header-section/header-section.component';
import {DashboardComponent} from './component/container/container.component';
import {SectionHeaderComponent} from './component/section-header/section-header.component';
import {TopMembersComponent} from './component/top-members/top-members.component';
import Content from './component/content/content.component';
import {DashboardSectionComponent} from './component/section/section.component';
import {MainComponent} from './component/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNavigationComponent, SearchBarComponent, UserProfileComponent, HeaderSectionComponent, DashboardComponent, SectionHeaderComponent, TopMembersComponent, Content, DashboardSectionComponent, MainComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figmakepzes';
}
