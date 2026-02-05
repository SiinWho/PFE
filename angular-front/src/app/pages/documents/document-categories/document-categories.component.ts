import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';

interface DocumentCategory {
  id: number;
  name: string;
  description: string;
  count: number;
  color: 'success' | 'warning' | 'error' | 'light' | 'primary';
}

@Component({
  selector: 'app-document-categories',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent],
  templateUrl: './document-categories.component.html',
})
export class DocumentCategoriesComponent {
  categories: DocumentCategory[] = [
    { id: 1, name: 'Contracts', description: 'Employment and Third-party contracts', count: 12, color: 'primary' },
    { id: 2, name: 'Payslips', description: 'Monthly employee payment records', count: 48, color: 'success' },
    { id: 3, name: 'Polices', description: 'Company rules and regulations', count: 5, color: 'warning' },
    { id: 4, name: 'Certifications', description: 'Training and professional certs', count: 24, color: 'primary' }
  ];
}
