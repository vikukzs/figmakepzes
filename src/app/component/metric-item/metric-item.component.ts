import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'metric-item.component.html',
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
