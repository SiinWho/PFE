import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

interface LeaveRequest {
  id: number;
  employee: string;
  type: string;
  from: string;
  to: string;
  days: number;
  status: 'Approuvé' | 'En attente' | 'Rejeté';
}

interface LeaveBalance {
  employeeId: number;
  type: string;
  total: number;
  used: number;
  remaining: number;
}

@Component({
  selector: 'app-leave-list',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, ButtonComponent, RouterLink],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css',
})
export class LeaveListComponent {
  leaves: LeaveRequest[] = [
    { id: 1, employee: 'Ahmed Ben Ali', type: 'Annuel', from: '2024-03-15', to: '2024-03-20', days: 5, status: 'En attente' },
    { id: 2, employee: 'Sara Mansour', type: 'Maladie', from: '2024-03-10', to: '2024-03-12', days: 2, status: 'En attente' }
  ];

  leaveBalances: LeaveBalance[] = [
    { employeeId: 1, type: 'Annuel', total: 21, used: 5, remaining: 16 },
    { employeeId: 1, type: 'Maladie', total: 10, used: 0, remaining: 10 }
  ];

  getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
    switch (status) {
      case 'Approuvé': return 'success';
      case 'En attente': return 'warning';
      case 'Rejeté': return 'error';
      default: return 'light';
    }
  }
}
