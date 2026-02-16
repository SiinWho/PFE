import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

interface EmployeeBalance {
    employeeId: number;
    employeeName: string;
    department: string;
    leaveType: string;
    total: number;
    used: number;
    remaining: number;
    pending: number;
    carryover: number;
    lastModified: string;
    status: 'Normal' | 'Low' | 'Critical' | 'Exceeded';
}

interface BalanceAdjustment {
    id: number;
    employeeId: number;
    employeeName: string;
    leaveType: string;
    amount: number;
    reason: string;
    adjustedBy: string;
    date: string;
}

@Component({
    selector: 'app-balance-dashboard',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, BadgeComponent],
    templateUrl: './balance-dashboard.component.html',
    styleUrl: './balance-dashboard.component.css',
})
export class BalanceDashboardComponent {
    balances: EmployeeBalance[] = [
        {
            employeeId: 1,
            employeeName: 'Ahmed Ben Ali',
            department: 'IT',
            leaveType: 'Annual',
            total: 21,
            used: 15,
            remaining: 6,
            pending: 5,
            carryover: 0,
            lastModified: '2024-03-01T10:00:00',
            status: 'Low'
        },
        {
            employeeId: 1,
            employeeName: 'Ahmed Ben Ali',
            department: 'IT',
            leaveType: 'Sick',
            total: 10,
            used: 2,
            remaining: 8,
            pending: 0,
            carryover: 0,
            lastModified: '2024-02-15T14:30:00',
            status: 'Normal'
        },
        {
            employeeId: 2,
            employeeName: 'Sara Mansour',
            department: 'RH',
            leaveType: 'Annual',
            total: 21,
            used: 8,
            remaining: 13,
            pending: 2,
            carryover: 0,
            lastModified: '2024-03-05T09:15:00',
            status: 'Normal'
        },
        {
            employeeId: 3,
            employeeName: 'Mohamed Trabelsi',
            department: 'Finance',
            leaveType: 'Annual',
            total: 21,
            used: 20,
            remaining: 1,
            pending: 3,
            carryover: 0,
            lastModified: '2024-03-10T11:00:00',
            status: 'Critical'
        },
        {
            employeeId: 4,
            employeeName: 'Leila Oueslati',
            department: 'Marketing',
            leaveType: 'Annual',
            total: 21,
            used: 10,
            remaining: 11,
            pending: 5,
            carryover: 0,
            lastModified: '2024-02-28T16:45:00',
            status: 'Normal'
        }
    ];

    adjustmentHistory: BalanceAdjustment[] = [
        {
            id: 1,
            employeeId: 1,
            employeeName: 'Ahmed Ben Ali',
            leaveType: 'Annual',
            amount: 2,
            reason: 'Compensation pour heures supplémentaires',
            adjustedBy: 'Admin RH',
            date: '2024-02-01T10:00:00'
        },
        {
            id: 2,
            employeeId: 3,
            employeeName: 'Mohamed Trabelsi',
            leaveType: 'Sick',
            amount: -1,
            reason: 'Correction erreur de saisie',
            adjustedBy: 'Admin RH',
            date: '2024-02-15T14:30:00'
        }
    ];

    stats = {
        totalEmployees: 45,
        avgUtilization: 62,
        lowBalanceCount: 8,
        criticalBalanceCount: 3,
        totalPending: 15
    };

    filterDepartment = '';
    filterStatus = '';
    showAdjustmentModal = false;
    selectedBalance: EmployeeBalance | null = null;
    adjustmentAmount = 0;
    adjustmentReason = '';

    getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
        switch (status) {
            case 'Normal': return 'success';
            case 'Low': return 'warning';
            case 'Critical': return 'error';
            case 'Exceeded': return 'error';
            default: return 'light';
        }
    }

    getUtilizationColor(percentage: number): string {
        if (percentage >= 90) return 'text-error-500';
        if (percentage >= 70) return 'text-warning-500';
        return 'text-success-500';
    }

    getUtilizationPercentage(balance: EmployeeBalance): number {
        return Math.round((balance.used / balance.total) * 100);
    }

    openAdjustmentModal(balance: EmployeeBalance) {
        this.selectedBalance = balance;
        this.showAdjustmentModal = true;
        this.adjustmentAmount = 0;
        this.adjustmentReason = '';
    }

    closeAdjustmentModal() {
        this.showAdjustmentModal = false;
        this.selectedBalance = null;
        this.adjustmentAmount = 0;
        this.adjustmentReason = '';
    }

    saveAdjustment() {
        if (!this.selectedBalance || !this.adjustmentReason) return;

        const adjustment: BalanceAdjustment = {
            id: this.adjustmentHistory.length + 1,
            employeeId: this.selectedBalance.employeeId,
            employeeName: this.selectedBalance.employeeName,
            leaveType: this.selectedBalance.leaveType,
            amount: this.adjustmentAmount,
            reason: this.adjustmentReason,
            adjustedBy: 'Admin RH',
            date: new Date().toISOString()
        };

        this.adjustmentHistory.unshift(adjustment);
        this.selectedBalance.total += this.adjustmentAmount;
        this.selectedBalance.remaining += this.adjustmentAmount;
        this.selectedBalance.lastModified = new Date().toISOString();

        this.closeAdjustmentModal();
    }

    exportBalances() {
        console.log('Exporting balances...');
    }

    get filteredBalances() {
        return this.balances.filter(b => {
            const matchDept = !this.filterDepartment || b.department === this.filterDepartment;
            const matchStatus = !this.filterStatus || b.status === this.filterStatus;
            return matchDept && matchStatus;
        });
    }

    get departments() {
        return [...new Set(this.balances.map(b => b.department))];
    }
}
