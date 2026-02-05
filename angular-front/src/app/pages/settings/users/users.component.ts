import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface UserInfo {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: UserInfo[] = [
    { id: 1, name: 'Ahmed Admin', email: 'admin@asm.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sara HR', email: 'sara@asm.com', role: 'HR Manager', status: 'Active' }
  ];

  getStatusColor(status: string): 'success' | 'error' | 'light' {
    return status === 'Active' ? 'success' : 'error';
  }
}
