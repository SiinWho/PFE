import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface Authorization {
    id: number;
    employee: string;
    type: 'Sortie' | 'Mission';
    date: string;
    duration?: string;
    destination?: string;
    reason: string;
    status: 'Approuvé' | 'En attente' | 'Rejeté';
    submittedAt: string;
}

@Component({
    selector: 'app-authorization-list',
    standalone: true,
    imports: [CommonModule, RouterLink, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, ButtonComponent],
    templateUrl: './authorization-list.component.html',
    styleUrl: './authorization-list.component.css',
})
export class AuthorizationListComponent {
    authorizations: Authorization[] = [
        {
            id: 1,
            employee: 'Ahmed Ben Ali',
            type: 'Sortie',
            date: '2024-03-15',
            duration: '2 heures',
            reason: 'Rendez-vous médical',
            status: 'En attente',
            submittedAt: '2024-03-14T10:00:00'
        },
        {
            id: 2,
            employee: 'Sara Mansour',
            type: 'Mission',
            date: '2024-03-20',
            destination: 'Tunis',
            reason: 'Formation professionnelle',
            status: 'Approuvé',
            submittedAt: '2024-03-10T14:30:00'
        },
        {
            id: 3,
            employee: 'Leila Oueslati',
            type: 'Sortie',
            date: '2024-03-16',
            duration: '3 heures',
            reason: 'Démarches administratives',
            status: 'En attente',
            submittedAt: '2024-03-15T09:15:00'
        }
    ];

    getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
        switch (status) {
            case 'Approuvé': return 'success';
            case 'En attente': return 'warning';
            case 'Rejeté': return 'error';
            default: return 'light';
        }
    }

    getTypeColor(type: string): 'primary' | 'light' {
        return type === 'Mission' ? 'primary' : 'light';
    }
}
