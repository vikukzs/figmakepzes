import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "time-range-button-group",
  template: `
    <div class="flex overflow-hidden items-start rounded-lg border border-solid shadow-sm border-[color:var(--Colors-Border-border-primary,#333741)] min-w-60 text-neutral-300">
      <button
        class="gap-2 self-stretch pt-8 pb-16 border-r border-solid bg-[#1F242F] border-r-[color:var(--Colors-Border-border-primary,#333741)] min-h-10 pl-[var(--spacing-xl,16px)] pr-[var(--spacing-xl,16px)] text-neutral-300"
        [class.bg-[#1F242F]]="selectedRange === '12months'"
        [class.bg-[#0C111D]]="selectedRange !== '12months'"
        (click)="selectRange('12months')"
      >
        12 months
      </button>
      <button
        class="gap-2 self-stretch pt-8 pb-16 border-r border-solid border-r-[color:var(--Colors-Border-border-primary,#333741)] min-h-10 pl-[var(--spacing-xl,16px)] pr-[var(--spacing-xl,16px)] text-neutral-300"
        [class.bg-[#1F242F]]="selectedRange === '30days'"
        [class.bg-[#0C111D]]="selectedRange !== '30days'"
        (click)="selectRange('30days')"
      >
        30 days
      </button>
      <button
        class="gap-2 self-stretch pt-8 pb-16 border-r border-solid border-r-[color:var(--Colors-Border-border-primary,#333741)] min-h-10 pl-[var(--spacing-xl,16px)] pr-[var(--spacing-xl,16px)] text-neutral-300"
        [class.bg-[#1F242F]]="selectedRange === '7days'"
        [class.bg-[#0C111D]]="selectedRange !== '7days'"
        (click)="selectRange('7days')"
      >
        7 days
      </button>
      <button
        class="gap-2 self-stretch pt-8 pb-16 border-r border-solid border-r-[color:var(--Colors-Border-border-primary,#333741)] min-h-10 pl-[var(--spacing-xl,16px)] pr-[var(--spacing-xl,16px)] text-neutral-300"
        [class.bg-[#1F242F]]="selectedRange === '24hours'"
        [class.bg-[#0C111D]]="selectedRange !== '24hours'"
        (click)="selectRange('24hours')"
      >
        24 hours
      </button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class TimeRangeButtonGroupComponent {
  selectedRange: '12months' | '30days' | '7days' | '24hours' = '12months';

  selectRange(range: '12months' | '30days' | '7days' | '24hours'): void {
    this.selectedRange = range;
  }
}
