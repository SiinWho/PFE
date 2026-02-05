import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { LabelComponent } from '../../../shared/components/form/label/label.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageBreadcrumbComponent, ComponentCardComponent, InputFieldComponent, ButtonComponent, LabelComponent],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.css',
})
export class DocumentUploadComponent {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.uploadForm = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      file: [null, Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      console.log('Uploading...', this.uploadForm.value);
      this.router.navigate(['/documents']);
    }
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
