import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryBadgeComponent} from '../category-badge/category-badge.component';

export interface Category {
  iconUrl: string;
  text: string;
}

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [CommonModule, CategoryBadgeComponent],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css'
})
export class BlogPostCardComponent {
  @Input() imageUrl: string = '';
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() categories: Category[] = [];
  @Input() hasExternalLink: boolean = false;
  @Input() externalLinkIcon: string = '';
}

