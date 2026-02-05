import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface Skill {
  id: number;
  name: string;
  category: 'Technical' | 'Soft Skills' | 'Languages' | 'Certifications';
  subcategory?: string;
}

@Component({
  selector: 'app-skill-catalog',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent],
  templateUrl: './skill-catalog.component.html',
})
export class SkillCatalogComponent {
  skillCatalog: Skill[] = [
    { id: 1, name: 'Angular', category: 'Technical', subcategory: 'Frontend' },
    { id: 2, name: 'Laravel', category: 'Technical', subcategory: 'Backend' },
    { id: 3, name: 'Leadership', category: 'Soft Skills' },
    { id: 4, name: 'English', category: 'Languages' },
    { id: 5, name: 'Project Management', category: 'Soft Skills' },
    { id: 6, name: 'AWS Certified', category: 'Certifications' }
  ];

  get skillsByCategory() {
    const groups: { [key: string]: Skill[] } = {};
    this.skillCatalog.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    return Object.keys(groups).map(key => ({ category: key, skills: groups[key] }));
  }
}
