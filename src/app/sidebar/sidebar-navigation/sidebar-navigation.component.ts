import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavItemComponent} from '../nav-item/nav-item.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FeatureCardComponent} from '../feature-card/feature-card.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';

@Component({
  selector: 'sidebar-navigation',
  standalone: true,
  imports: [
    CommonModule,
    NavItemComponent,
    SearchBarComponent,
    FeatureCardComponent,
    UserProfileComponent
  ],
  template: `
    <aside class="flex overflow-hidden self-stretch h-full bg-gray-900 border-r border-solid border-r-[color:var(--Colors-Border-border-secondary,#1F242F)]">
      <div class="flex-1 shrink w-full basis-0 min-w-60">
        <nav class="gap-6 pt-8 w-full">
          <header class="flex flex-col items-start w-full">
            <div class="flex items-start w-[99px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d926306779ef2ebc28ad7b8bd715a2ed7838b?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0"
                class="object-contain aspect-[3.1] w-[99px]"
                alt="Logo"
              />
            </div>
          </header>

          <div class="pt-0 pb-24 mt-6 w-full text-base whitespace-nowrap pl-[var(--spacing-3xl,] pr-[var(--spacing-3xl,] text-zinc-500">
            <search-bar />
          </div>

          <nav class="gap-1 pt-0 pb-16 mt-6 w-full text-base font-semibold whitespace-nowrap pl-[var(--spacing-xl,] pr-[var(--spacing-xl,] text-neutral-300">
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ede6082a5504f8598ec9e1297f4abc083a0f2219?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Home" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/55058edc03cf0d899e0706df21040b618973e3f5?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Dashboard" [isActive]="true" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0ded0069dc07eaeb899731c5462df23cea37adb7?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Projects" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e1e544438260266fb75e70277e3c4d586ce51169?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Tasks" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/00d76599a25206c5064de3e09b387e4f7741f99b?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Reporting" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3519cf0fc61e3bebffd7ea82f09d99ef1773fbde?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Users" />
          </nav>
        </nav>

        <footer class="gap-6 mt-6 w-full">
          <nav class="gap-1 w-full text-base font-semibold whitespace-nowrap text-neutral-300">
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3074536b0312b798393b7941e86db32d147f0655?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Support" />
            <nav-item icon="https://cdn.builder.io/api/v1/image/assets/TEMP/78f01694be07bf6fb5c4f4b72624c2a90e49bbf3?placeholderIfAbsent=true&apiKey=bef382be73d24de0969b578f4e2fc9e0" text="Settings" />
          </nav>

          <feature-card />
          <user-profile />
        </footer>
      </div>
    </aside>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SidebarNavigationComponent {}
