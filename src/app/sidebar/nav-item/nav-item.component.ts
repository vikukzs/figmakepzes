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
  template: `
    <nav
      class="flex overflow-hidden gap-2 items-center pt-8 pb-12 w-full rounded-md"
      [ngClass]="isActive ? 'bg-[#1F242F] text-gray-200' : 'bg-[#0C111D] text-neutral-300'"
    >
      <div class="flex flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0">
        <img
          [src]="icon"
          class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
        <span class="self-stretch my-auto">
          {{ text }}
        </span>
      </div>
    </nav>
  `
})
export class NavItemComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() isActive: boolean = false;
}
