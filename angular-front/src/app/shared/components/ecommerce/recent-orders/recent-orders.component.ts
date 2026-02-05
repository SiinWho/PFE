import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { RouterModule } from '@angular/router';

interface HRActivity {
  id: number;
  employee: string;
  type: string;
  date: string;
  amount?: string;
  status: 'Approved' | 'Pending' | 'Rejected' | 'Delivered' | 'Canceled';
}

@Component({
  selector: 'app-recent-orders',
  standalone: true,
  imports: [CommonModule, BadgeComponent, RouterModule],
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent {
  tableData: HRActivity[] = [
    {
      id: 1,
      employee: "Ahmed Ben Ali",
      type: "Annual Leave",
      date: "Mar 15, 2024",
      status: "Approved",
    },
    {
      id: 2,
      employee: "Sara Mansour",
      type: "Remote Work Request",
      date: "Mar 14, 2024",
      status: "Pending",
    },
    {
      id: 3,
      employee: "Tarek Jendoubi",
      type: "New Contract signed",
      date: "Mar 12, 2024",
      status: "Approved",
    },
    {
      id: 4,
      employee: "Leila Oueslati",
      type: "Sick Leave",
      date: "Mar 10, 2024",
      status: "Rejected",
    },
    {
      id: 5,
      employee: "Anis Khedher",
      type: "Training Certification",
      date: "Mar 08, 2024",
      status: "Approved",
    },
  ];

  getBadgeColor(status: string): 'success' | 'warning' | 'error' {
    if (status === 'Approved' || status === 'Delivered') return 'success';
    if (status === 'Pending') return 'warning';
    return 'error';
  }
}
