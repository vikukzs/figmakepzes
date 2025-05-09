import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-badge.component.html',
  styleUrl: './category-badge.component.css'
})
export class CategoryBadgeComponent {
  @Input() iconUrl: string = '';
  @Input() text: string = '';
}
