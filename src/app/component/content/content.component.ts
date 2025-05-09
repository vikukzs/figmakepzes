import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopMembersComponent} from '../top-members/top-members.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [CommonModule, TopMembersComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export default class Content {}
