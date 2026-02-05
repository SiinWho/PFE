import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

interface SkillGap {
  position: string;
  employee: string;
  requiredSkills: string[];
  gaps: {
    skill: string;
    currentLevel: string | null;
    requiredLevel: string;
    criticality: 'High' | 'Medium' | 'Low';
  }[];
}

@Component({
  selector: 'app-skill-gap-analysis',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, BadgeComponent],
  templateUrl: './skill-gap-analysis.component.html',
})
export class SkillGapAnalysisComponent {
  skillGaps: SkillGap[] = [
    {
      position: 'Senior Frontend Developer',
      employee: 'Ahmed Ben Ali',
      requiredSkills: ['Angular', 'React', 'TypeScript'],
      gaps: [
        { skill: 'React', currentLevel: null, requiredLevel: 'Advanced', criticality: 'High' },
        { skill: 'TypeScript', currentLevel: 'Intermediate', requiredLevel: 'Advanced', criticality: 'Medium' }
      ]
    },
    {
      position: 'IT Manager',
      employee: 'Sara Mansour',
      requiredSkills: ['Leadership', 'Strategic Planning', 'Cloud Architecture'],
      gaps: [
        { skill: 'Cloud Architecture', currentLevel: 'Beginner', requiredLevel: 'Advanced', criticality: 'Medium' }
      ]
    }
  ];

  getCriticalityColor(criticality: string): 'error' | 'warning' | 'light' {
    switch (criticality) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      default: return 'light';
    }
  }
}
