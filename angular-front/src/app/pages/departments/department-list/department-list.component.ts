import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

interface Department {
  id: number;
  code: string;
  name: string;
  manager: string;
  employeeCount: number;
}

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  departments: Department[] = [
    { id: 1, code: 'IT', name: 'Information Technology', manager: 'Ahmed Ben Ali', employeeCount: 12 },
    { id: 2, code: 'HR', name: 'Human Resources', manager: 'Sara Mansour', employeeCount: 5 },
    { id: 3, code: 'FIN', name: 'Finance', manager: 'Mohamed Triki', employeeCount: 8 }
  ];
}
