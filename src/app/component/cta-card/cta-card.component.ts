import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      class="flex flex-1 shrink gap-3 items-start p-5 bg-gray-900 rounded-xl border border-solid shadow-sm basis-0 border-[color:var(--Colors-Border-border-secondary,#1F242F)] min-w-80"
    >
      <img
        [src]="imageUrl"
        class="object-contain shrink-0 w-12 shadow-sm aspect-square"
        alt=""
      />
      <div class="flex-1 shrink basis-0 min-w-60">
        <h3
          class="text-base font-semibold text-neutral-300"
        >
          {{ title }}
        </h3>
        <p
          class="text-sm leading-none text-ellipsis text-neutral-400"
        >
          {{ description }}
        </p>
      </div>
    </article>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class CtaCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
