import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { TableComponent } from '../../../shared/components/ui/table/table.component';
import { TableRowComponent } from '../../../shared/components/ui/table/table-row.component';
import { TableCellComponent } from '../../../shared/components/ui/table/table-cell.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

type LeaveStatus = 'Approved' | 'Pending' | 'Rejected';

interface LeaveRequestDetail {
  id: number;
  employee: string;
  department: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
}

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    TableComponent,
    TableRowComponent,
    TableCellComponent,
    BadgeComponent,
    ButtonComponent
  ],
  templateUrl: './leave-requests.component.html',
})
export class LeaveRequestsComponent {
  requests: LeaveRequestDetail[] = [
    {
      id: 101,
      employee: 'Ahmed Ben Ali',
      department: 'IT',
      type: 'Annual Leave',
      startDate: '2026-03-15',
      endDate: '2026-03-20',
      days: 5,
      reason: 'Family trip',
      status: 'Pending',
    },
    {
      id: 102,
      employee: 'Sara Mansour',
      department: 'HR',
      type: 'Sick Leave',
      startDate: '2026-03-10',
      endDate: '2026-03-12',
      days: 2,
      reason: 'Medical appointment',
      status: 'Pending',
    },
    {
      id: 103,
      employee: 'Tarek Jendoubi',
      department: 'Finance',
      type: 'Remote Work',
      startDate: '2026-03-22',
      endDate: '2026-03-24',
      days: 3,
      reason: 'Traveling for personal matters',
      status: 'Approved',
    },
    {
      id: 104,
      employee: 'Leila Oueslati',
      department: 'Marketing',
      type: 'Sick Leave',
      startDate: '2026-03-05',
      endDate: '2026-03-06',
      days: 1,
      reason: 'Flu symptoms',
      status: 'Rejected',
    },
    {
      id: 105,
      employee: 'Anis Khedher',
      department: 'Sales',
      type: 'Annual Leave',
      startDate: '2026-04-01',
      endDate: '2026-04-05',
      days: 5,
      reason: 'Family obligations',
      status: 'Pending',
    },
  ];

  getStatusColor(status: LeaveStatus): 'success' | 'warning' | 'error' {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      default:
        return 'error';
    }
  }

  approve(id: number) {
    this.updateStatus(id, 'Approved');
  }

  decline(id: number) {
    this.updateStatus(id, 'Rejected');
  }

  private updateStatus(id: number, status: LeaveStatus) {
    this.requests = this.requests.map((r) =>
      r.id === id ? { ...r, status } : r
    );
  }
}
