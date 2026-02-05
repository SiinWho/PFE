import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { DropdownComponent } from '../../../shared/components/ui/dropdown/dropdown.component';
import { CheckboxComponent } from '../../../shared/components/form/input/checkbox.component';

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  joinDate: string;
  manager?: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent, RouterLink, FormsModule, InputFieldComponent, ButtonComponent, DropdownComponent, CheckboxComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  searchTerm: string = '';
  isFilterOpen = false;

  // Selected filter values
  selectedDepartments: string[] = [];
  selectedStatuses: string[] = [];

  // Available filter options extracted from data
  get departments(): string[] {
    return Array.from(new Set(this.employees.map(e => e.department)));
  }

  get statuses(): string[] {
    return Array.from(new Set(this.employees.map(e => e.status)));
  }

  handleSearch(value: string | number): void {
    this.searchTerm = value.toString();
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleDepartment(dept: string) {
    if (this.selectedDepartments.includes(dept)) {
      this.selectedDepartments = this.selectedDepartments.filter(d => d !== dept);
    } else {
      this.selectedDepartments.push(dept);
    }
  }

  toggleStatus(status: string) {
    if (this.selectedStatuses.includes(status)) {
      this.selectedStatuses = this.selectedStatuses.filter(s => s !== status);
    } else {
      this.selectedStatuses.push(status);
    }
  }

  clearFilters() {
    this.selectedDepartments = [];
    this.selectedStatuses = [];
    this.searchTerm = '';
  }

  get filteredEmployees() {
    return this.employees.filter(employee => {
      const matchesSearch =
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesDept = this.selectedDepartments.length === 0 || this.selectedDepartments.includes(employee.department);
      const matchesStatus = this.selectedStatuses.length === 0 || this.selectedStatuses.includes(employee.status);

      return matchesSearch && matchesDept && matchesStatus;
    });
  }


  employees: Employee[] = [
    {
      id: 1,
      name: 'Ahmed Ben Ali',
      role: 'Full Stack Developer',
      email: 'ahmed@example.com',
      image: '/images/user/profile.jpg',
      department: 'IT',
      status: 'Active',
      joinDate: '2023-01-15',
      manager: 'Sara Mansour'
    },
    {
      id: 2,
      name: 'Sara Mansour',
      role: 'HR Manager',
      email: 'sara@example.com',
      image: '/images/user/profile.jpg',
      department: 'HR',
      status: 'Active',
      joinDate: '2023-02-10'
    },
    {
      id: 3,
      name: 'Tarek Jendoubi',
      role: 'Financial Analyst',
      email: 'tarek@example.com',
      image: '/images/user/profile.jpg',
      department: 'Finance',
      status: 'On Leave',
      joinDate: '2023-03-05',
      manager: 'Sara Mansour'
    },
    {
      id: 4,
      name: 'Leila Oueslati',
      role: 'Network Engineer',
      email: 'leila@example.com',
      image: '/images/user/profile.jpg',
      department: 'IT',
      status: 'Active',
      joinDate: '2022-11-20',
      manager: 'Sara Mansour'
    },
    {
      id: 5,
      name: 'Anis Khedher',
      role: 'Recruitment Specialist',
      email: 'anis@example.com',
      image: '/images/user/profile.jpg',
      department: 'HR',
      status: 'Active',
      joinDate: '2022-12-01',
      manager: 'Sara Mansour'
    }
  ];

  getBadgeColor(status: string): 'success' | 'warning' | 'error' | 'light' {
    switch (status) {
      case 'Active':
        return 'success';
      case 'On Leave':
        return 'warning';
      case 'Terminated':
        return 'error';
      default:
        return 'light';
    }
  }
}
