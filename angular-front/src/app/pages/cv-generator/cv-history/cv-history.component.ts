import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

interface GeneratedCV {
  id: number;
  targetPosition: string;
  sourceFile: string;
  generatedDate: string;
  version: number;
  status: string;
}

@Component({
  selector: 'app-cv-history',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent],
  templateUrl: './cv-history.component.html',
})
export class CvHistoryComponent {
  generatedCVs: GeneratedCV[] = [
    {
      id: 1,
      targetPosition: 'Senior Angular Developer',
      sourceFile: 'old_cv_2023.pdf',
      generatedDate: '2024-03-01',
      version: 2,
      status: 'Generated'
    },
    {
      id: 2,
      targetPosition: 'Lead Frontend Engineer',
      sourceFile: 'latest-resume.docx',
      generatedDate: '2024-02-15',
      version: 1,
      status: 'Generated'
    }
  ];
}
