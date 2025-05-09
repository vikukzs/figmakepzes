import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full">
      <h3 class="text-sm font-medium leading-none text-neutral-400">
        {{ heading }}
      </h3>
      <div class="flex gap-2 items-start mt-2 w-full whitespace-nowrap">
        <div class="flex gap-0.5 items-start" *ngIf="hasCurrencySymbol; else valueOnly">
          <span class="pt-0.5 text-xl font-medium text-neutral-100">$</span>
          <span [class]="valueClass">{{ value }}</span>
        </div>
        <ng-template #valueOnly>
          <span [class]="valueClass">{{ value }}</span>
        </ng-template>
        <div class="flex gap-1 justify-center items-center text-sm font-medium leading-none text-center text-green-400">
          <img [src]="changeIconUrl" class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="Change indicator" />
          <span class="self-stretch my-auto text-green-400">{{ change }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class MetricItemComponent {
  @Input() heading!: string;
  @Input() value!: string;
  @Input() change!: string;
  @Input() changeIconUrl!: string;
  @Input() hasCurrencySymbol: boolean = false;
  @Input() valueClass: string = 'text-3xl font-semibold leading-none text-neutral-100';
}
