import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavItemComponent} from '../nav-item/nav-item.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FeatureCardComponent} from '../feature-card/feature-card.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';

@Component({
  selector: 'sidebar-navigation',
  standalone: true,
  imports: [
    CommonModule,
    NavItemComponent,
    SearchBarComponent,
    FeatureCardComponent,
    UserProfileComponent
  ],
  templateUrl: './sidebar-navigation.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SidebarNavigationComponent {}
