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
          'Angular Ecommerce Dashboard | ASM Portal',
      },
      {
        path: 'employees',
        component: EmployeeListComponent,
        title: 'Employees | ASM Portal'
      },
      {
        path: 'employees/add',
        component: EmployeeFormComponent,
        title: 'Add Employee | ASM Portal'
      },
      {
        path: 'employees/edit/:id',
        component: EmployeeFormComponent,
        title: 'Edit Employee | ASM Portal'
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailComponent,
        title: 'Employee Details | ASM Portal'
      },
      {
        path: 'calendar',
        component: CalenderComponent,
        title: 'Calendar | ASM Portal'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile | ASM Portal'
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
          { path: '', component: DepartmentListComponent, title: 'Departments | ASM' },
          { path: 'new', component: DepartmentFormComponent, title: 'Add Department | ASM' },
          { path: ':id/edit', component: DepartmentFormComponent, title: 'Edit Department | ASM' }
        ]
      },
      {
        path: 'leaves',
        children: [
          { path: '', component: LeaveListComponent, title: 'Leaves | ASM' },
          { path: 'management', component: LeaveManagementComponent, title: 'Leave Management | ASM' },
          { path: 'balances', component: BalanceDashboardComponent, title: 'Balance Dashboard | ASM' },
          { path: 'calendar', component: LeaveCalendarComponent, title: 'Leave Calendar | ASM' },
          { path: 'types', component: LeaveTypesComponent, title: 'Leave Types | ASM' },
          { path: ':id', component: LeaveDetailComponent, title: 'Leave Details | ASM' }
        ]
      },
      {
        path: 'authorizations',
        children: [
          { path: '', component: AuthorizationListComponent, title: 'Authorizations | ASM' }
        ]
      },
      {
        path: 'forms',
        children: [
          { path: 'builder', component: FormBuilderComponent, title: 'Form Builder | ASM' }
        ]
      },
      {
        path: 'workflows',
        children: [
          { path: 'editor', component: WorkflowEditorComponent, title: 'Workflow Editor | ASM' }
        ]
      },
      {
        path: 'documents',
        children: [
          { path: '', component: DocumentListComponent, title: 'Documents | ASM' },
          { path: 'categories', component: DocumentCategoriesComponent, title: 'Document Categories | ASM' },
          { path: 'upload', component: DocumentUploadComponent, title: 'Upload Document | ASM' },
          { path: ':id', component: DocumentDetailComponent, title: 'Document Details | ASM' }
        ]
      },
      {
        path: 'ai',
        children: [
          { path: 'chat', component: AiChatComponent, title: 'AI Assistant | ASM' },
          { path: 'history', component: ConversationHistoryComponent, title: 'Conversation History | ASM' }
        ]
      },
      {
        path: 'skills',
        children: [
          { path: 'catalog', component: SkillCatalogComponent, title: 'Skill Catalog | ASM' },
          { path: 'matrix', component: SkillMatrixComponent, title: 'Skill Matrix | ASM' },
          { path: 'gap-analysis', component: SkillGapAnalysisComponent, title: 'Skill Gap Analysis | ASM' },
          { path: 'cv-extraction', component: CvExtractionComponent, title: 'CV Extraction | ASM' }
        ]
      },
      {
        path: 'cv-generator',
        children: [
          { path: '', component: CvBuilderComponent, title: 'CV Builder | ASM' },
          { path: 'history', component: CvHistoryComponent, title: 'CV History | ASM' }
        ]
      },
      {
        path: 'settings',
        children: [
          { path: 'users', component: UsersComponent, title: 'Users | ASM' },
          { path: 'roles', component: RolesComponent, title: 'Roles | ASM' },
          { path: 'permissions', component: PermissionsComponent, title: 'Permissions | ASM' }
        ]
      },
    ]
  },
  {
    path: 'signin',
    component: SignInComponent,
    title: 'Sign In | ASM Portal'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Sign Up | ASM Portal'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found | ASM Portal'
  },
];
