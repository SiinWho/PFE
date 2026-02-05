import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-cv-extraction',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent],
  templateUrl: './cv-extraction.component.html',
})
export class CvExtractionComponent {
  isExtracting = false;
  extractedSkills: string[] = [];
  selectedFile: string | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file.name;
    }
  }

  extractSkills() {
    if (!this.selectedFile) return;

    this.isExtracting = true;
    this.extractedSkills = [];

    // Mock AI Extraction Process
    setTimeout(() => {
      this.extractedSkills = ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Project Management', 'Agile'];
      this.isExtracting = false;
    }, 2000);
  }
}
