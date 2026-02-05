import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';

interface RolePermission {
  role: string;
  permissions: string[];
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent],
  templateUrl: './permissions.component.html',
})
export class PermissionsComponent {
  roles: RolePermission[] = [
    {
      role: 'Admin',
      permissions: ['manage_users', 'manage_all_employees', 'approve_all_leaves', 'access_all_documents', 'system_config']
    },
    {
      role: 'HR',
      permissions: ['manage_employees', 'manage_leaves', 'access_hr_documents', 'generate_reports']
    },
    {
      role: 'Manager',
      permissions: ['view_team', 'approve_team_leaves', 'view_team_documents']
    },
    {
      role: 'Employee',
      permissions: ['view_profile', 'request_leave', 'view_own_documents', 'update_skills']
    }
  ];
}
