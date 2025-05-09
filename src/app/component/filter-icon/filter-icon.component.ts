import { Component } from "@angular/core";

@Component({
  selector: "filter-icon",
  template: `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    >
      <path
        d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
        stroke="#D4D4D8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  standalone: true
})
export class FilterIconComponent {}
