import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';

interface EmployeeSkill {
  employeeId: number;
  employeeName: string;
  skills: {
    skillId: number;
    skillName: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    yearsExperience: number;
  }[];
}

@Component({
  selector: 'app-skill-matrix',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent],
  templateUrl: './skill-matrix.component.html',
})
export class SkillMatrixComponent {
  employeeSkills: EmployeeSkill[] = [
    {
      employeeId: 1,
      employeeName: 'Ahmed Ben Ali',
      skills: [
        { skillId: 1, skillName: 'Angular', level: 'Expert', yearsExperience: 5 },
        { skillId: 2, skillName: 'Laravel', level: 'Advanced', yearsExperience: 3 },
        { skillId: 4, skillName: 'English', level: 'Advanced', yearsExperience: 10 }
      ]
    },
    {
      employeeId: 2,
      employeeName: 'Sara Mansour',
      skills: [
        { skillId: 3, skillName: 'Leadership', level: 'Expert', yearsExperience: 8 },
        { skillId: 5, skillName: 'Project Management', level: 'Advanced', yearsExperience: 6 }
      ]
    }
  ];

  jobRoles = [
    { title: 'Senior Frontend Developer', requirements: ['Angular', 'TypeScript', 'Tailwind CSS'] },
    { title: 'IT Manager', requirements: ['Leadership', 'Project Management', 'Cloud Architecture'] }
  ];

  selectedRole = this.jobRoles[0];

  getMatchingScore(employee: EmployeeSkill, role: typeof this.jobRoles[0]): number {
    const matched = role.requirements.filter(req =>
      employee.skills.some(s => s.skillName.toLowerCase() === req.toLowerCase())
    ).length;
    return Math.round((matched / role.requirements.length) * 100);
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert': return 'bg-primary-500 text-white';
      case 'Advanced': return 'bg-primary-500/80 text-white';
      case 'Intermediate': return 'bg-gray-400 text-white';
      case 'Beginner': return 'bg-gray-200 text-gray-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  }
}
