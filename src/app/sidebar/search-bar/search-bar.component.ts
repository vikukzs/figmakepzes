import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gap-2 w-full">
      <div class="gap-1.5 w-full">
        <div class="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-gray-900 rounded-lg border border-solid shadow-sm border-[color:var(--Colors-Border-border-primary,#333741)]">
          <div class="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0850e9f7650e47c243222ee538cf71ebb761b750?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0"
              class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Search icon"
            />
            <input
              type="text"
              placeholder="Search"
              class="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis text-zinc-500 bg-transparent border-none outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  `
})
export class SearchBarComponent {}
