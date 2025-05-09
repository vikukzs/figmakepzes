import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderSectionComponent} from '../header-section/header-section.component';
import {DashboardComponent} from '../container/container.component';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {DashboardSectionComponent} from '../section/section.component';
import Content from '../content/content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderSectionComponent, DashboardComponent, SectionHeaderComponent, DashboardSectionComponent, Content],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
