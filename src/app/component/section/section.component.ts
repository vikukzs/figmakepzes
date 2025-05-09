import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CtaCardComponent} from '../cta-card/cta-card.component';
import {BlogPostCardComponent} from '../blog-post-card/blog-post-card.component';
import {CategoryBadgeComponent} from '../category-badge/category-badge.component';

@Component({
  selector: 'app-dashboard-section',
  standalone: true,
  imports: [CommonModule, CtaCardComponent, BlogPostCardComponent, CategoryBadgeComponent],
  templateUrl: 'section.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class DashboardSectionComponent {}


