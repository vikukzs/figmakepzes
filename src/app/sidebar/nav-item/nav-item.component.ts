import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
}

@Component({
  selector: 'nav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() isActive: boolean = false;
}
