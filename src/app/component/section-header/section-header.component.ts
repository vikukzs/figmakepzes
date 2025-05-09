import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  templateUrl: `section-header.component.html`,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class SectionHeaderComponent {
  @Input() title: string = 'Start creating content';
  @Input() dropdownIconUrl: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf844d0c732c0bfc1f32e29ac16270e0e1bcd0dd?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914';

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    // Additional dropdown functionality can be implemented here
  }
}
