import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {TimeRangeButtonGroupComponent} from '../time-range-button-group/time-range-button-group.component';
import {CalendarIconComponent} from '../calendar-icon/calendar-icon.component';
import {FilterIconComponent} from '../filter-icon/filter-icon.component';

@Component({
  selector: "header-section",
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css',
  standalone: true,
  imports: [
    CommonModule,
    TimeRangeButtonGroupComponent,
    CalendarIconComponent,
    FilterIconComponent
  ],
})
export class HeaderSectionComponent {}
