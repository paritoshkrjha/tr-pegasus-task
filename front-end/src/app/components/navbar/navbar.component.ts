import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

import { SidebarModule } from 'primeng/sidebar';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    DividerModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    SidebarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
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
  sidebarVisible: boolean = false;
  isExpanded: boolean = false;

  constructor(private userService: UserService,private router:Router,private authService:AuthService) {}

  ngOnInit() {
    this.updateMenuItems();
    window.addEventListener('resize', this.updateMenuItems.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateMenuItems.bind(this));
  }

  get userName() {
    return this.userService.user?.username ?? 'Guest';
  }

  get isSmallScreen() {
    return window.innerWidth < 768;
  }

  get userInitials() {
    return this.userName.charAt(0).toUpperCase();
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  updateMenuItems() {
    if (this.isSmallScreen) {
      this.items = [
        {
          items: [
            {
              label: 'User profile',
            },
            {
              label: 'Change password',
            },
            {
              label: 'Logout',
              icon: 'pi pi-sign-out',
              command: () => {
                this.logout();
              },
            },
          ],
        },
      ];
    } else {
      this.items = [
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
    }
  }

  logout() {
    this.authService.logout();
  }
}
