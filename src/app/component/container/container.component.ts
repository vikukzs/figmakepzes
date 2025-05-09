import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MrrDisplayComponent} from '../mrr-display/mrr-display.component';
import {ChartComponent} from '../chart/chart.component';
import {MetricsComponent} from '../metrics/metrics.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MrrDisplayComponent, ChartComponent, MetricsComponent],
  template: `
    <main class="flex flex-wrap gap-8 items-start self-stretch pt-0 pb-32 pl-[var(--container-padding-desktop,] pr-[var(--container-padding-desktop,] max-md:px-5">
      <section class="flex flex-wrap flex-1 shrink gap-4 items-start basis-0 min-w-60 max-md:max-w-full">
        <app-mrr-display></app-mrr-display>
        <app-chart></app-chart>
      </section>
      <app-metrics></app-metrics>
    </main>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class DashboardComponent {}
