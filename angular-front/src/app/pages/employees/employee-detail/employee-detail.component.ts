import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  joinDate: string;
  phone: string;
  location: string;
  bio: string;
  manager?: string;
  careerHistory?: { role: string; department: string; startDate: string; endDate?: string }[];
  subordinates?: { id: number; name: string; role: string; image: string }[];
}

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    BadgeComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null = null;
  employeeId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    if (this.employeeId) {
      this.loadEmployeeData(this.employeeId);
    }
  }

  loadEmployeeData(id: string): void {
    // Mock data based on ID
    this.employee = {
      id: +id,
      name: 'Ahmed Ben Ali',
      role: 'Full Stack Developer',
      email: 'ahmed@example.com',
      image: '/images/user/profile.jpg',
      department: 'IT',
      status: 'Active',
      joinDate: '2022-01-15',
      phone: '+216 22 333 444',
      location: 'Tunis, Tunisia',
      bio: 'Highly motivated Full Stack Developer with 4+ years of experience in modern web technologies. Specializing in Angular and Laravel.',
      manager: 'Sara Mansour',
      careerHistory: [
        { role: 'Junior React Developer', department: 'Digital', startDate: '2022-01-15', endDate: '2023-05-20' },
        { role: 'Full Stack Developer', department: 'IT', startDate: '2023-05-21', endDate: undefined }
      ],
      subordinates: [
        { id: 101, name: 'Layla Belhaj', role: 'UI Designer', image: '/images/user/user-01.png' },
        { id: 102, name: 'Sami Karray', role: 'Junior dev', image: '/images/user/user-02.png' }
      ]
    };
  }

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

  onBack(): void {
    this.router.navigate(['/employees']);
  }
}
