import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberItemComponent} from '../member-item/member-item.component';
import {Member} from '../../member.model';

@Component({
  selector: 'app-top-members',
  standalone: true,
  imports: [CommonModule, MemberItemComponent],
  template: `
    <section class="max-w-60">
      <header>
        <h2 class="text-sm font-medium leading-none text-neutral-400">
          Top members
        </h2>
      </header>
      <div class="mt-6 w-full">
        <app-member-item
          *ngFor="let member of members"
          [member]="member"
        ></app-member-item>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class TopMembersComponent {
  members: Member[] = [
    {
      id: '1',
      name: 'Phoenix Baker',
      joinDate: 'Feb 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c872a91613aba26e28c5b45ce369ff36f82a5e1e?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: true
    },
    {
      id: '2',
      name: 'Lana Steiner',
      joinDate: 'Jan 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d54e583c96c6c597d7e9e222c5b8c9ab61489717?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: true
    },
    {
      id: '3',
      name: 'Demi Wikinson',
      joinDate: 'Mar 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2df95e61917d8da30cc9fc8c5624a6272d28f6f7?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: true
    },
    {
      id: '4',
      name: 'Candice Wu',
      joinDate: 'Feb 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92f18e7844dd0e7dc6b09783c720a0adbafe165c?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '5',
      name: 'Natali Craig',
      joinDate: 'Mar 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/94cefba395d7ad1a8f1ac8e58d49b8b53a5cb5ab?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '6',
      name: 'Orlando Diggs',
      joinDate: 'Apr 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49f08f41fe3736cb48d3eb4f77f8a13c0b581e68?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '7',
      name: 'Drew Cano',
      joinDate: 'Apr 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0527b17ca871aa5a505859481e344ddb5478f1d5?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '8',
      name: 'Kate Morrison',
      joinDate: 'Jan 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/630273fece21d10063c8abe53dda112687573242?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '9',
      name: 'Koray Okumus',
      joinDate: 'Feb 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c776ae59e09d418535a0ff33e29ae456318fc100?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    },
    {
      id: '10',
      name: 'Ava Wright',
      joinDate: 'Mar 2022',
      profileImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7c3639a49ec615842cb9f02cbc65c5242839647?placeholderIfAbsent=true&apiKey=dfcfffcc633040d682e227c261ee7914',
      isOnline: false
    }
  ];
}

