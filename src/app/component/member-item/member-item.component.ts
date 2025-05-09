import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Member} from '../../member.model';

@Component({
  selector: 'app-member-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'member-item.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class MemberItemComponent {
  @Input() member!: Member;
}
