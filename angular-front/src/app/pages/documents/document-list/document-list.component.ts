import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

interface DocumentInfo {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  date: string;
  version: string;
  path: string; // Hierarchical path
}

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, RouterLink],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  documents: DocumentInfo[] = [
    { id: 1, name: 'Employment_Contract_Ahmed.pdf', type: 'Contract', size: '245 KB', uploadedBy: 'Sara Mansour', date: '2024-01-15', version: 'v1.2', path: 'Contracts / Employment' },
    { id: 2, name: 'March_Bonus_Policy.pdf', type: 'Policy', size: '1.2 MB', uploadedBy: 'Sara Mansour', date: '2024-03-01', version: 'v2.0', path: 'Policies / HR' },
    { id: 3, name: 'Internal_Rules_2024.pdf', type: 'Policy', size: '5.4 MB', uploadedBy: 'Admin', date: '2023-12-20', version: 'v3.1', path: 'Policies / Global' }
  ];

  getFileIcon(name: string): string {
    if (name.endsWith('.pdf')) return 'pdf';
    if (name.endsWith('.docx')) return 'word';
    if (name.endsWith('.xlsx')) return 'excel';
    return 'file';
  }
}
