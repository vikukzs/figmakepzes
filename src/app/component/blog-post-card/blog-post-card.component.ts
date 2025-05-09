import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryBadgeComponent} from '../category-badge/category-badge.component';

export interface Category {
  iconUrl: string;
  text: string;
}

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [CommonModule, CategoryBadgeComponent],
  template: `
    <article
      class="flex-1 shrink gap-5 basis-0 min-h-[432px] min-w-80"
    >
      <img
        [src]="imageUrl"
        class="object-contain w-full aspect-[1.67]"
        alt="{{ title }}"
      />
      <div class="gap-6 mt-5 w-full">
        <div class="gap-2 w-full">
          <p
            class="text-sm font-semibold leading-none text-neutral-300"
          >
            {{ author }} • {{ date }}
          </p>
          <div
            class="flex gap-4 items-start mt-2 w-full"
          >
            <h2
              class="text-lg font-medium leading-loose text-neutral-100 w-[344px]"
            >
              {{ title }}
            </h2>
            <div class="pt-1 w-6" *ngIf="hasExternalLink">
              <img
                [src]="externalLinkIcon"
                class="object-contain w-6 aspect-square"
                alt="External link"
              />
            </div>
          </div>
          <p
            class="mt-2 text-base leading-6 text-ellipsis text-neutral-400"
          >
            {{ description }}
          </p>
        </div>
        <div
          class="flex flex-wrap gap-8 content-start items-start mt-6 w-full text-sm font-medium leading-none text-center whitespace-nowrap text-neutral-300"
        >
          <app-category-badge
            *ngFor="let category of categories"
            [iconUrl]="category.iconUrl"
            [text]="category.text"
          ></app-category-badge>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class BlogPostCardComponent {
  @Input() imageUrl: string = '';
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() categories: Category[] = [];
  @Input() hasExternalLink: boolean = false;
  @Input() externalLinkIcon: string = '';
}

