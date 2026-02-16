import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './pages/employees/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form.component';
import { DepartmentListComponent } from './pages/departments/department-list/department-list.component';
import { DepartmentFormComponent } from './pages/departments/department-form/department-form.component';
import { LeaveListComponent } from './pages/leaves/leave-list/leave-list.component';
import { LeaveCalendarComponent } from './pages/leaves/leave-calendar/leave-calendar.component';
import { LeaveTypesComponent } from './pages/leaves/leave-types/leave-types.component';
import { LeaveDetailComponent } from './pages/leaves/leave-detail/leave-detail.component';
import { DocumentListComponent } from './pages/documents/document-list/document-list.component';
import { DocumentUploadComponent } from './pages/documents/document-upload/document-upload.component';
import { DocumentDetailComponent } from './pages/documents/document-detail/document-detail.component';
import { DocumentCategoriesComponent } from './pages/documents/document-categories/document-categories.component';
import { AiChatComponent } from './pages/ai/ai-chat/ai-chat.component';
import { ConversationHistoryComponent } from './pages/ai/conversation-history/conversation-history.component';
import { SkillCatalogComponent } from './pages/skills/skill-catalog/skill-catalog.component';
import { SkillMatrixComponent } from './pages/skills/skill-matrix/skill-matrix.component';
import { SkillGapAnalysisComponent } from './pages/skills/skill-gap-analysis/skill-gap-analysis.component';
import { CvExtractionComponent } from './pages/skills/cv-extraction/cv-extraction.component';
import { CvBuilderComponent } from './pages/cv-generator/cv-builder/cv-builder.component';
import { CvHistoryComponent } from './pages/cv-generator/cv-history/cv-history.component';
import { UsersComponent } from './pages/settings/users/users.component';
import { RolesComponent } from './pages/settings/roles/roles.component';
import { PermissionsComponent } from './pages/settings/permissions/permissions.component';
import { LeaveManagementComponent } from './pages/leaves/leave-management/leave-management.component';
import { BalanceDashboardComponent } from './pages/leaves/balance-dashboard/balance-dashboard.component';
import { AuthorizationListComponent } from './pages/authorizations/authorization-list/authorization-list.component';
import { FormBuilderComponent } from './pages/forms/form-builder/form-builder.component';
import { WorkflowEditorComponent } from './pages/workflows/workflow-editor/workflow-editor.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Tableau de Bord E-commerce | Portail ASM',
      },
      {
        path: 'employees',
        component: EmployeeListComponent,
        title: 'Employés | Portail ASM'
      },
      {
        path: 'employees/add',
        component: EmployeeFormComponent,
        title: 'Ajouter un Employé | Portail ASM'
      },
      {
        path: 'employees/edit/:id',
        component: EmployeeFormComponent,
        title: 'Modifier un Employé | Portail ASM'
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailComponent,
        title: 'Détails Employé | Portail ASM'
      },
      {
        path: 'calendar',
        component: CalenderComponent,
        title: 'Calendrier | Portail ASM'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profil | Portail ASM'
      },
      {
        path: 'form-elements',
        component: FormElementsComponent,
        title: 'Form Elements | ASM Portal'
      },
      {
        path: 'basic-tables',
        component: BasicTablesComponent,
        title: 'Basic Tables | ASM Portal'
      },
      {
        path: 'blank',
        component: BlankComponent,
        title: 'Blank Page | ASM Portal'
      },
      {
        path: 'invoice',
        component: InvoicesComponent,
        title: 'Invoice Details | ASM Portal'
      },
      {
        path: 'line-chart',
        component: LineChartComponent,
        title: 'Line Chart | ASM Portal'
      },
      {
        path: 'bar-chart',
        component: BarChartComponent,
        title: 'Bar Chart | ASM Portal'
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        title: 'Alerts | ASM Portal'
      },
      {
        path: 'avatars',
        component: AvatarElementComponent,
        title: 'Avatars | ASM Portal'
      },
      {
        path: 'badge',
        component: BadgesComponent,
        title: 'Badges | ASM Portal'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        title: 'Buttons | ASM Portal'
      },
      {
        path: 'images',
        component: ImagesComponent,
        title: 'Images | ASM Portal'
      },
      {
        path: 'videos',
        component: VideosComponent,
        title: 'Videos | ASM Portal'
      },
      // HR Portal Routes
      {
        path: 'departments',
        children: [
          { path: '', component: DepartmentListComponent, title: 'Départements | ASM' },
          { path: 'new', component: DepartmentFormComponent, title: 'Ajouter Département | ASM' },
          { path: ':id/edit', component: DepartmentFormComponent, title: 'Modifier Département | ASM' }
        ]
      },
      {
        path: 'leaves',
        children: [
          { path: '', component: LeaveListComponent, title: 'Congés | ASM' },
          { path: 'management', component: LeaveManagementComponent, title: 'Gestion des Congés | ASM' },
          { path: 'balances', component: BalanceDashboardComponent, title: 'Tableau de Bord des Soldes | ASM' },
          { path: 'calendar', component: LeaveCalendarComponent, title: 'Calendrier des Congés | ASM' },
          { path: 'types', component: LeaveTypesComponent, title: 'Types de Congés | ASM' },
          { path: ':id', component: LeaveDetailComponent, title: 'Détails Congé | ASM' }
        ]
      },
      {
        path: 'authorizations',
        children: [
          { path: '', component: AuthorizationListComponent, title: 'Autorisations | ASM' }
        ]
      },
      {
        path: 'forms',
        children: [
          { path: 'builder', component: FormBuilderComponent, title: 'Créateur de Formulaires | ASM' }
        ]
      },
      {
        path: 'workflows',
        children: [
          { path: 'editor', component: WorkflowEditorComponent, title: 'Éditeur de Workflow | ASM' }
        ]
      },
      {
        path: 'documents',
        children: [
          { path: '', component: DocumentListComponent, title: 'Documents | ASM' },
          { path: 'categories', component: DocumentCategoriesComponent, title: 'Catégories de Documents | ASM' },
          { path: 'upload', component: DocumentUploadComponent, title: 'Téléverser un Document | ASM' },
          { path: ':id', component: DocumentDetailComponent, title: 'Détails Document | ASM' }
        ]
      },
      {
        path: 'ai',
        children: [
          { path: 'chat', component: AiChatComponent, title: 'Assistant IA | ASM' },
          { path: 'history', component: ConversationHistoryComponent, title: 'Historique des Conversations | ASM' }
        ]
      },
      {
        path: 'skills',
        children: [
          { path: 'catalog', component: SkillCatalogComponent, title: 'Catalogue de Compétences | ASM' },
          { path: 'matrix', component: SkillMatrixComponent, title: 'Matrice de Compétences | ASM' },
          { path: 'gap-analysis', component: SkillGapAnalysisComponent, title: 'Analyse des Écarts | ASM' },
          { path: 'cv-extraction', component: CvExtractionComponent, title: 'Extraction CV | ASM' }
        ]
      },
      {
        path: 'cv-generator',
        children: [
          { path: '', component: CvBuilderComponent, title: 'Générateur de CV | ASM' },
          { path: 'history', component: CvHistoryComponent, title: 'Historique CV | ASM' }
        ]
      },
      {
        path: 'settings',
        children: [
          { path: 'users', component: UsersComponent, title: 'Utilisateurs | ASM' },
          { path: 'roles', component: RolesComponent, title: 'Rôles | ASM' },
          { path: 'permissions', component: PermissionsComponent, title: 'Permissions | ASM' }
        ]
      },
    ]
  },
  {
    path: 'signin',
    component: SignInComponent,
    title: 'Connexion | Portail ASM'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Inscription | Portail ASM'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found | ASM Portal'
  },
];
