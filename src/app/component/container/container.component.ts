import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MrrDisplayComponent} from '../mrr-display/mrr-display.component';
import {ChartComponent} from '../chart/chart.component';
import {MetricsComponent} from '../metrics/metrics.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MrrDisplayComponent, ChartComponent, MetricsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class DashboardComponent {}
