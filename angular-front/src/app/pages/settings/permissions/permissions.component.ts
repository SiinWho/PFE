import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';

interface RolePermission {
  role: string;
  permissions: string[];
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent],
  templateUrl: './permissions.component.html',
})
export class PermissionsComponent {
  roles: RolePermission[] = [
    {
      role: 'Administrateur',
      permissions: ['gérer_utilisateurs', 'gérer_tous_employés', 'approuver_tous_congés', 'accéder_tous_documents', 'config_système']
    },
    {
      role: 'RH',
      permissions: ['gérer_employés', 'gérer_congés', 'accès_documents_rh', 'générer_rapports']
    },
    {
      role: 'Manager',
      permissions: ['voir_équipe', 'approuver_congés_équipe', 'voir_documents_équipe']
    },
    {
      role: 'Employé',
      permissions: ['voir_profil', 'demander_congé', 'voir_documents_personnels', 'mettre_à_jour_compétences']
    }
  ];
}
