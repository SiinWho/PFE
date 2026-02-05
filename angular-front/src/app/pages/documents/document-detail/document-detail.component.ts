import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface DocumentInfo {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  date: string;
  description: string;
  version: string;
  path: string;
  versions: { version: string; date: string; size: string; uploadedBy: string }[];
  auditTrail: { user: string; action: string; date: string }[];
}

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, RouterLink],
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent implements OnInit {
  document: DocumentInfo | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Mock data
    this.document = {
      id: Number(id),
      name: 'Employment_Contract_Ahmed.pdf',
      type: 'Contract',
      size: '245 KB',
      uploadedBy: 'Sara Mansour',
      date: '2024-01-15',
      description: 'Standard employment contract for Ahmed Ben Ali, including Annex A for benefits.',
      version: 'v1.2',
      path: 'Contracts / Employment',
      versions: [
        { version: 'v1.0', date: '2024-01-01', size: '240 KB', uploadedBy: 'Sara Mansour' },
        { version: 'v1.1', date: '2024-01-10', size: '242 KB', uploadedBy: 'Sara Mansour' },
        { version: 'v1.2', date: '2024-01-15', size: '245 KB', uploadedBy: 'Sara Mansour' }
      ],
      auditTrail: [
        { user: 'Ahmed Ben Ali', action: 'Downloaded', date: '2024-01-16 10:30' },
        { user: 'Sara Mansour', action: 'Consulted', date: '2024-01-20 14:15' },
        { user: 'Ahmed Ben Ali', action: 'Downloaded', date: '2024-03-01 09:00' }
      ]
    };
  }
}
