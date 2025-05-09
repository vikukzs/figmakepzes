import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MetricItemComponent} from '../metric-item/metric-item.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule, MetricItemComponent],
  templateUrl: 'metrics.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class MetricsComponent {}

