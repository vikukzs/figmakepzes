import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopMembersComponent} from '../top-members/top-members.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [CommonModule, TopMembersComponent],
  template: `
    <app-top-members></app-top-members>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export default class Content {}
