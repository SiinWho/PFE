import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { LabelComponent } from '../../../shared/components/form/label/label.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageBreadcrumbComponent, ComponentCardComponent, InputFieldComponent, ButtonComponent, LabelComponent],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.css',
})
export class DepartmentFormComponent {
  departmentForm: FormGroup;
  isEditMode = false;
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.departmentForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      manager: ['', [Validators.required]],
      budget: ['', [Validators.required, Validators.min(0)]],
      location: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      // Mock loading data
      this.departmentForm.patchValue({
        code: 'IT',
        name: 'Information Technology',
        manager: 'Ahmed Ben Ali',
        budget: 50000,
        location: 'Tunis, Tunisia'
      });
    }
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      console.log('Form Submitted', this.departmentForm.value);
      this.router.navigate(['/departments']);
    } else {
      Object.keys(this.departmentForm.controls).forEach(key => {
        const control = this.departmentForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/departments']);
  }
}
