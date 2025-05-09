import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MetricItemComponent} from '../metric-item/metric-item.component';

@Component({
  selector: 'app-mrr-display',
  standalone: true,
  imports: [CommonModule, MetricItemComponent],
  templateUrl: 'mrr-display.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class MrrDisplayComponent {}

