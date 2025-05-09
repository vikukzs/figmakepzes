import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "time-range-button-group",
  templateUrl: `time-range-button-group.component.html`,
  standalone: true,
  imports: [CommonModule],
})
export class TimeRangeButtonGroupComponent {
  selectedRange: '12months' | '30days' | '7days' | '24hours' = '12months';

  selectRange(range: '12months' | '30days' | '7days' | '24hours'): void {
    this.selectedRange = range;
  }
}
