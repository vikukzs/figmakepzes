import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-card.component.html',
  styleUrl: './cta-card.component.css'
})
export class CtaCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
