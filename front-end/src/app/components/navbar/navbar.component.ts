import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    DividerModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      items: [
        {
          label: 'User profile',
        },
        {
          label: 'Change password',
        },
      ],
    },
  ];

  constructor(private userService: UserService) {}

  get userName() {
    return this.userService.user?.username ?? 'Guest';
  }
}
