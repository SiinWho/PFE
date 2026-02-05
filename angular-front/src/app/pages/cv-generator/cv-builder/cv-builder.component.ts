import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { LabelComponent } from '../../../shared/components/form/label/label.component';

@Component({
  selector: 'app-cv-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, InputFieldComponent, LabelComponent],
  templateUrl: './cv-builder.component.html',
})
export class CvBuilderComponent {
  availableSkills = ['Angular', 'Laravel', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Project Management', 'Agile'];

  selectedFile: File | null = null;
  fileName: string = '';

  cvData: { targetPosition: string; highlightSkills: string[] } = {
    targetPosition: '',
    highlightSkills: []
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileName = file.name;
    }
  }

  toggleSkill(skill: string) {
    if (this.cvData.highlightSkills.includes(skill)) {
      this.cvData.highlightSkills = this.cvData.highlightSkills.filter(s => s !== skill);
    } else {
      this.cvData.highlightSkills.push(skill);
    }
  }

  isGenerating = false;
  cvGenerated = false;

  generateCV() {
    if (!this.cvData.targetPosition || !this.selectedFile) return;

    this.isGenerating = true;

    // Mock AI Generation delay - Transforming old CV to Unified Template
    setTimeout(() => {
      this.isGenerating = false;
      this.cvGenerated = true;
    }, 4000);
  }

  handleValueChange(value: string | number) {
    this.cvData.targetPosition = value.toString();
  }
}
