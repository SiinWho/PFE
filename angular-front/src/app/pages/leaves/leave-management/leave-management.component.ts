import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface LeaveRequest {
    id: number;
    employee: string;
    employeeId: number;
    type: string;
    from: string;
    to: string;
    days: number;
    status: 'Approuvé' | 'En attente' | 'Rejeté';
    reason: string;
    submittedAt: string;
    currentApprover?: string;
    balance: {
        total: number;
        used: number;
        remaining: number;
    };
}

@Component({
    selector: 'app-leave-management',
    standalone: true,
    imports: [CommonModule, RouterLink, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, ButtonComponent],
    templateUrl: './leave-management.component.html',
    styleUrl: './leave-management.component.css',
})
export class LeaveManagementComponent {
    pendingRequests: LeaveRequest[] = [
        {
            id: 1,
            employee: 'Ahmed Ben Ali',
            employeeId: 1,
            type: 'Annuel',
            from: '2024-03-15',
            to: '2024-03-20',
            days: 5,
            status: 'En attente', // Internal status remains English for logic, translated in template
            reason: 'Voyage familial à Hammamet.',
            submittedAt: '2024-03-01T10:00:00',
            currentApprover: 'Sara Mansour (Manager)',
            balance: { total: 21, used: 5, remaining: 16 }
        },
        {
            id: 2,
            employee: 'Sara Mansour',
            employeeId: 2,
            type: 'Maladie',
            from: '2024-03-10',
            to: '2024-03-12',
            days: 2,
            status: 'En attente',
            reason: 'Consultation médicale',
            submittedAt: '2024-03-08T14:30:00',
            currentApprover: 'Département RH',
            balance: { total: 10, used: 2, remaining: 8 }
        },
        {
            id: 3,
            employee: 'Leila Oueslati',
            employeeId: 4,
            type: 'Annuel',
            from: '2024-03-25',
            to: '2024-03-29',
            days: 5,
            status: 'En attente',
            reason: 'Affaires personnelles',
            submittedAt: '2024-03-12T09:15:00',
            currentApprover: 'Sara Mansour (Manager)',
            balance: { total: 21, used: 10, remaining: 11 }
        }
    ];

    stats = {
        pending: 3,
        approved: 12,
        rejected: 1,
        avgProcessingTime: '1.5 jours'
    };

    getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
        switch (status) {
            case 'Approuvé': return 'success';
            case 'En attente': return 'warning';
            case 'Rejeté': return 'error';
            default: return 'light';
        }
    }

    approveRequest(id: number) {
        const request = this.pendingRequests.find(r => r.id === id);
        if (request) {
            request.status = 'Approuvé';
            console.log(`Approved leave request #${id}`);
        }
    }

    rejectRequest(id: number) {
        const request = this.pendingRequests.find(r => r.id === id);
        if (request) {
            request.status = 'Rejeté';
            console.log(`Rejected leave request #${id}`);
        }
    }

    getBalanceStatus(balance: { remaining: number; total: number }): string {
        const percentage = (balance.remaining / balance.total) * 100;
        if (percentage < 20) return 'text-error-500';
        if (percentage < 50) return 'text-warning-500';
        return 'text-success-500';
    }
}
