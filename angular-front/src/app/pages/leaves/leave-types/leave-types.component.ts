import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface LeaveType {
  id: number;
  name: string;
  days: number;
  description: string;
}

@Component({
  selector: 'app-leave-types',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent],
  templateUrl: './leave-types.component.html',
  styleUrl: './leave-types.component.css',
})
export class LeaveTypesComponent {
  leaveTypes: LeaveType[] = [
    { id: 1, name: 'Annual', days: 21, description: 'Standard annual paid leave.' },
    { id: 2, name: 'Sick', days: 10, description: 'Paid sick leave for medical reasons.' },
    { id: 3, name: 'Maternity', days: 90, description: 'Paid leave for expecting mothers.' },
    { id: 4, name: 'Unpaid', days: 0, description: 'Unpaid leave for personal reasons.' }
  ];
}
