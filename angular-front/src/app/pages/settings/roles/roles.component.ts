import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface RoleInfo {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  rolesList: RoleInfo[] = [
    { id: 1, name: 'Admin', description: 'Full access to all modules.' },
    { id: 2, name: 'HR Manager', description: 'Manage employees, leaves, and documents.' },
    { id: 3, name: 'Employee', description: 'View profile and request leaves.' }
  ];
}
