import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex gap-1.5 items-center py-2 rounded-md border border-solid shadow-sm bg-[#0C111D] border-[color:var(--Colors-Border-border-primary,#333741)] px-3"
    >
      <img
        [src]="iconUrl"
        class="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
        alt=""
      />
      <span
        class="self-stretch my-auto text-sm font-medium leading-none text-neutral-300"
      >
        {{ text }}
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class CategoryBadgeComponent {
  @Input() iconUrl: string = '';
  @Input() text: string = '';
}
