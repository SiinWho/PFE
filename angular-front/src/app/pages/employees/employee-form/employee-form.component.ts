import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { SelectComponent } from '../../../shared/components/form/select/select.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { LabelComponent } from '../../../shared/components/form/label/label.component';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    InputFieldComponent,
    SelectComponent,
    ButtonComponent,
    LabelComponent
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode = false;
  employeeId: string | null = null;

  departments = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Design', label: 'Design' },
    { value: 'Product', label: 'Product' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'HR', label: 'HR' }
  ];

  roles = [
    { value: 'Frontend Developer', label: 'Frontend Developer' },
    { value: 'Backend Developer', label: 'Backend Developer' },
    { value: 'Fullstack Developer', label: 'Fullstack Developer' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'QA Engineer', label: 'QA Engineer' },
    { value: 'Project Manager', label: 'Project Manager' }
  ];

  statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'On Leave', label: 'On Leave' },
    { value: 'Terminated', label: 'Terminated' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Frontend Developer', Validators.required],
      department: ['Engineering', Validators.required],
      status: ['Active', Validators.required],
      joinDate: ['', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    if (this.employeeId) {
      this.isEditMode = true;
      this.loadEmployeeData(this.employeeId);
    }
  }

  loadEmployeeData(id: string): void {
    // In a real app, this would come from a service
    // For now, using mock data for demonstration
    const mockEmployee = {
      name: 'Adnan Safi',
      email: 'adnan@example.com',
      role: 'Backend Developer',
      department: 'Engineering',
      status: 'Active',
      joinDate: '2023-01-15',
      bio: 'Experienced backend developer specializing in Node.js and Angular.'
    };
    this.employeeForm.patchValue(mockEmployee);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form submitted:', this.employeeForm.value);
      // In a real app, send to service
      this.router.navigate(['/employees']);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
