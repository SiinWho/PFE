import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface LeaveRequest {
  id: number;
  employee: string;
  type: string;
  from: string;
  to: string;
  days: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  reason: string;
  submittedAt: string;
  approvalSteps: { step: string; actor: string; status: 'Approved' | 'Pending' | 'Rejected'; date?: string }[];
}

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, ButtonComponent, RouterLink],
  templateUrl: './leave-detail.component.html',
  styleUrl: './leave-detail.component.css',
})
export class LeaveDetailComponent implements OnInit {
  leave: LeaveRequest | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Mock data
    this.leave = {
      id: Number(id),
      employee: 'Ahmed Ben Ali',
      type: 'Annual',
      from: '2024-03-15',
      to: '2024-03-20',
      days: 5,
      status: 'Pending',
      reason: 'Family vacation trip to Hammamet.',
      submittedAt: '2024-03-01T10:00:00',
      approvalSteps: [
        { step: 'Manager Approval', actor: 'Sara Mansour', status: 'Approved', date: '2024-03-02 09:30' },
        { step: 'HR Validation', actor: 'Admin', status: 'Pending' }
      ]
    };
  }

  getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
    switch (status) {
      case 'Approved': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'error';
      default: return 'light';
    }
  }

  approve() {
    if (this.leave) this.leave.status = 'Approved';
  }

  reject() {
    if (this.leave) this.leave.status = 'Rejected';
  }
}
