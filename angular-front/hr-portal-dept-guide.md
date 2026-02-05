# HR Portal Development Guide
## Angular Frontend Implementation - Official Specifications

**Project:** AI-Powered HR Portal  
**Duration:** 16 weeks (4 months)  
**Technology Stack:** Angular + Material UI, Laravel Backend, PostgreSQL + Qdrant  
**Team:** 2 developers  

---

## 📋 Project Overview

### Core Modules to Implement

1. **Authentication & User Management** - Roles: Employee, Manager, HR, Admin
2. **Employee Management** - CRUD, departments, hierarchy
3. **Leave Management** - Requests, approval workflow, balance tracking
4. **Document Management** - Upload, categorization, permissions
5. **AI Document Intelligence (RAG)** - Conversational document search
6. **Skills Management** - CV extraction, skill matrix, gap analysis
7. **AI CV Generator** - Automated professional CV creation

---

## 🏗️ PHASE 3: Create Page Components

### Prerequisites
✅ Employees module already created  
✅ Angular project running with TailAdmin template  

---

### Step 3.2: Departments Module

```bash
ng generate component pages/departments/department-list --standalone
ng generate component pages/departments/department-form --standalone
```

**Purpose:** Manage organizational structure and departments

**Features:**
- List departments with manager and employee count
- Create/Edit department information
- Hierarchical organization display

**Mock Data:**
```typescript
departments = [
  { id: 1, code: 'IT', name: 'Information Technology', manager: 'Ahmed Ben Ali', employeeCount: 12 },
  { id: 2, code: 'HR', name: 'Human Resources', manager: 'Sara Mansour', employeeCount: 5 },
  { id: 3, code: 'FIN', name: 'Finance', manager: 'Mohamed Triki', employeeCount: 8 }
];
```

---

### Step 3.3: Leave Management Module

```bash
ng generate component pages/leaves/leave-list --standalone
ng generate component pages/leaves/leave-detail --standalone
ng generate component pages/leaves/leave-calendar --standalone
ng generate component pages/leaves/leave-types --standalone
```

**Purpose:** Complete leave request workflow with automated approval

**Key Features per Specifications:**
- Online leave requests
- Automated approval workflow
- Balance tracking by leave type
- Shared team calendar
- Automatic notifications
- Working days calculation
- Overlap detection
- Public holiday management

**Leave Types:** Annual, Sick, Maternity, Unpaid

**Mock Data:**
```typescript
leaves = [
  { 
    id: 1, 
    employee: 'Ahmed Ben Ali', 
    type: 'Annual Leave',
    startDate: '2024-03-15', 
    endDate: '2024-03-20', 
    workingDays: 5,
    status: 'Approved',
    approver: 'Sara Mansour',
    requestDate: '2024-02-20'
  },
  { 
    id: 2, 
    employee: 'Sara Mansour', 
    type: 'Sick Leave',
    startDate: '2024-03-10', 
    endDate: '2024-03-12', 
    workingDays: 2,
    status: 'Pending',
    requestDate: '2024-03-08'
  }
];

leaveBalances = [
  { employeeId: 1, type: 'Annual', total: 21, used: 5, remaining: 16 },
  { employeeId: 1, type: 'Sick', total: 10, used: 0, remaining: 10 }
];
```

**Status Colors:**
- Approved → Green
- Pending → Yellow/Orange  
- Rejected → Red

---

### Step 3.4: Document Management Module

```bash
ng generate component pages/documents/document-list --standalone
ng generate component pages/documents/document-upload --standalone
ng generate component pages/documents/document-detail --standalone
ng generate component pages/documents/document-categories --standalone
```

**Purpose:** Secure document storage with granular permissions

**Specifications:**
- **Supported Formats:** PDF, DOC, DOCX, XLS, XLSX
- **Max File Size:** 10 MB
- **Features:** Upload, versioning, hierarchical categories, full-text search
- **Security:** Access control per document, audit trail, encrypted storage

**Document Categories:**
- Contracts
- Payslips
- Certifications
- Policies
- Forms
- Personal Documents

**Mock Data:**
```typescript
documents = [
  { 
    id: 1, 
    name: 'Employment_Contract_Ahmed.pdf',
    category: 'Contracts',
    type: 'PDF',
    size: '245 KB',
    uploadedBy: 'Sara Mansour',
    uploadDate: '2024-01-15',
    employee: 'Ahmed Ben Ali',
    version: 1,
    permissions: ['HR', 'Admin']
  },
  { 
    id: 2, 
    name: 'Payslip_March_2024.pdf',
    category: 'Payslips',
    type: 'PDF',
    size: '128 KB',
    uploadedBy: 'Finance Team',
    uploadDate: '2024-03-01',
    employee: 'All Employees',
    version: 1,
    permissions: ['All']
  }
];
```

---

### Step 3.5: AI Document Intelligence (RAG) Module

```bash
ng generate component pages/ai/ai-chat --standalone
ng generate component pages/ai/conversation-history --standalone
```

**Purpose:** Conversational AI to query HR documents intelligently

**RAG Technical Process (per specifications):**
1. Extract and split content into semantic chunks
2. Generate vector embeddings
3. Store in vector database (Qdrant/Weaviate)
4. Semantic similarity search
5. Generate contextualized responses via LLM (OpenAI/Azure OpenAI)

**User Features:**
- Conversational chat interface
- Responses with source attribution
- Conversation history
- Document relevance scores
- Natural language queries

**Example Queries:**
- "What is the company's annual leave policy?"
- "Show me employment contracts for IT department"
- "What are the maternity leave requirements?"

**Mock Data:**
```typescript
conversations = [
  {
    id: 1,
    messages: [
      { 
        role: 'user', 
        content: 'How many annual leave days do employees get?',
        timestamp: '2024-03-05 10:30'
      },
      { 
        role: 'assistant', 
        content: 'According to the HR policy document (updated Jan 2024), employees receive 21 annual leave days per year.',
        sources: [
          { document: 'HR_Policy_2024.pdf', page: 12, relevance: 0.95 }
        ],
        timestamp: '2024-03-05 10:30'
      }
    ],
    createdAt: '2024-03-05'
  }
];
```

**UI Components:**
- Chat message bubbles (user: right/orange, AI: left/gray)
- Source citations with links
- Relevance score indicators
- Conversation history sidebar
- New conversation button

---

### Step 3.6: Skills Management Module

```bash
ng generate component pages/skills/skill-catalog --standalone
ng generate component pages/skills/skill-matrix --standalone
ng generate component pages/skills/skill-gap-analysis --standalone
ng generate component pages/skills/cv-extraction --standalone
```

**Purpose:** AI-powered skill extraction and competency management

**Specifications:**
- Automatic skill extraction from CVs (AI)
- Organized skill catalog by categories
- Employee skill matrix
- Skill gap analysis
- Employee-position matching

**Skill Categories:**
- Technical Skills
- Soft Skills
- Languages
- Certifications

**Proficiency Levels:** Beginner, Intermediate, Advanced, Expert

**Mock Data:**
```typescript
skillCatalog = [
  { id: 1, name: 'Angular', category: 'Technical', subcategory: 'Frontend' },
  { id: 2, name: 'Laravel', category: 'Technical', subcategory: 'Backend' },
  { id: 3, name: 'Leadership', category: 'Soft Skills' },
  { id: 4, name: 'English', category: 'Languages' }
];

employeeSkills = [
  { 
    employeeId: 1, 
    employeeName: 'Ahmed Ben Ali',
    skills: [
      { skillId: 1, skillName: 'Angular', level: 'Expert', yearsExperience: 5 },
      { skillId: 2, skillName: 'Laravel', level: 'Advanced', yearsExperience: 3 },
      { skillId: 4, skillName: 'English', level: 'Advanced' }
    ]
  }
];

skillGaps = [
  {
    position: 'Senior Frontend Developer',
    requiredSkills: ['Angular', 'React', 'TypeScript'],
    employee: 'Ahmed Ben Ali',
    gaps: [
      { skill: 'React', currentLevel: null, requiredLevel: 'Advanced' }
    ]
  }
];
```

---

### Step 3.7: AI CV Generator Module

```bash
ng generate component pages/cv-generator/cv-builder --standalone
ng generate component pages/cv-generator/cv-templates --standalone
ng generate component pages/cv-generator/cv-history --standalone
```

**Purpose:** AI-powered professional CV generation

**Specifications:**
- Automatic professional CV generation
- AI optimization based on target position
- Modern customizable templates
- High-quality PDF export
- Version history

**Customization Options:**
- Tone & Style: Professional, Creative, Technical
- Selective skill highlighting
- Automatic position adaptation

**Mock Data:**
```typescript
cvTemplates = [
  { id: 1, name: 'Professional', style: 'clean', preview: 'template1.png' },
  { id: 2, name: 'Creative', style: 'modern', preview: 'template2.png' },
  { id: 3, name: 'Technical', style: 'minimal', preview: 'template3.png' }
];

generatedCVs = [
  {
    id: 1,
    employeeId: 1,
    employeeName: 'Ahmed Ben Ali',
    targetPosition: 'Senior Angular Developer',
    template: 'Professional',
    tone: 'professional',
    generatedDate: '2024-03-01',
    version: 1,
    status: 'Generated',
    pdfUrl: '/cvs/ahmed_cv_v1.pdf'
  }
];
```

---

### Step 3.8: User Management & Roles Module

```bash
ng generate component pages/settings/users --standalone
ng generate component pages/settings/roles --standalone
ng generate component pages/settings/permissions --standalone
```

**Purpose:** Hierarchical role and permission management

**Roles (per specifications):**
- **Employee:** Basic access
- **Manager:** Department-level management
- **HR:** HR-specific functions
- **Admin:** Full system access

**Security Features:**
- JWT tokens with expiration
- Robust password policy
- Anti-brute-force rate limiting
- Sensitive data encryption

**Mock Data:**
```typescript
users = [
  { 
    id: 1, 
    username: 'ahmed.benali',
    email: 'ahmed@company.com',
    role: 'Manager',
    department: 'IT',
    status: 'Active',
    lastLogin: '2024-03-05 14:30'
  },
  { 
    id: 2, 
    username: 'sara.mansour',
    email: 'sara@company.com',
    role: 'HR',
    department: 'Human Resources',
    status: 'Active',
    lastLogin: '2024-03-05 16:20'
  }
];

roles = [
  { 
    name: 'Admin', 
    permissions: ['manage_users', 'manage_all_employees', 'approve_all_leaves', 'access_all_documents', 'system_config']
  },
  { 
    name: 'HR', 
    permissions: ['manage_employees', 'manage_leaves', 'access_hr_documents', 'generate_reports']
  },
  { 
    name: 'Manager', 
    permissions: ['view_team', 'approve_team_leaves', 'view_team_documents']
  },
  { 
    name: 'Employee', 
    permissions: ['view_profile', 'request_leave', 'view_own_documents', 'update_skills']
  }
];
```

---

## 🧭 PHASE 4: Configure Routing

### Update app.routes.ts

```typescript
import { Routes } from '@angular/router';

// Import all components
import { DepartmentListComponent } from './pages/departments/department-list/department-list.component';
import { LeaveListComponent } from './pages/leaves/leave-list/leave-list.component';
// ... other imports

export const routes: Routes = [
  // Departments
  {
    path: 'departments',
    children: [
      { path: '', component: DepartmentListComponent },
      { path: 'new', component: DepartmentFormComponent },
      { path: ':id/edit', component: DepartmentFormComponent }
    ]
  },

  // Leaves
  {
    path: 'leaves',
    children: [
      { path: '', component: LeaveListComponent },
      { path: 'calendar', component: LeaveCalendarComponent },
      { path: 'types', component: LeaveTypesComponent },
      { path: ':id', component: LeaveDetailComponent }
    ]
  },

  // Documents
  {
    path: 'documents',
    children: [
      { path: '', component: DocumentListComponent },
      { path: 'categories', component: DocumentCategoriesComponent },
      { path: 'upload', component: DocumentUploadComponent },
      { path: ':id', component: DocumentDetailComponent }
    ]
  },

  // AI Document Intelligence
  {
    path: 'ai',
    children: [
      { path: 'chat', component: AiChatComponent },
      { path: 'history', component: ConversationHistoryComponent }
    ]
  },

  // Skills
  {
    path: 'skills',
    children: [
      { path: 'catalog', component: SkillCatalogComponent },
      { path: 'matrix', component: SkillMatrixComponent },
      { path: 'gap-analysis', component: SkillGapAnalysisComponent },
      { path: 'cv-extraction', component: CvExtractionComponent }
    ]
  },

  // CV Generator
  {
    path: 'cv-generator',
    children: [
      { path: '', component: CvBuilderComponent },
      { path: 'templates', component: CvTemplatesComponent },
      { path: 'history', component: CvHistoryComponent }
    ]
  },

  // Settings
  {
    path: 'settings',
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'permissions', component: PermissionsComponent }
    ]
  }
];
```

---

## 🎨 PHASE 5: Orange Branding

Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#f97316',
        50: '#fff7ed',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c'
      }
    }
  }
}
```

**Find & Replace:** `bg-blue-` → `bg-primary-`, `text-blue-` → `text-primary-`

---

## 🧱 PHASE 6: Build Page UIs

### Key UI Patterns

**Tables:** Reuse from `pages/tables/` for lists  
**Forms:** Reuse from `pages/forms/` for CRUD operations  
**Cards:** Use for dashboards and summaries  
**Badges:** Status indicators (Approved/Pending/Rejected)  
**File Icons:** Document type indicators  

### Priority Pages to Build First

1. **Leave List** - Core workflow functionality
2. **Document List** - File management UI
3. **AI Chat** - Showcase feature
4. **Department List** - Organizational structure
5. **Skills Matrix** - Visual competency display
6. **CV Generator** - AI demonstration

---

## 🤖 PHASE 7: AI Features Implementation

### AI Chat Interface (RAG)

**Component:** `ai-chat.component.ts`

```typescript
export class AiChatComponent {
  messages: any[] = [];
  newMessage = '';
  isLoading = false;

  sendMessage() {
    if (!this.newMessage.trim()) return;
    
    this.messages.push({
      role: 'user',
      content: this.newMessage,
      timestamp: new Date()
    });
    
    this.isLoading = true;
    
    // TODO: Call backend RAG API
    // For now, mock response
    setTimeout(() => {
      this.messages.push({
        role: 'assistant',
        content: 'Mock AI response based on documents...',
        sources: [
          { document: 'HR_Policy.pdf', page: 12, relevance: 0.95 }
        ],
        timestamp: new Date()
      });
      this.isLoading = false;
    }, 1500);
    
    this.newMessage = '';
  }
}
```

**Features to highlight:**
- Source attribution with document links
- Relevance scoring
- Conversation persistence
- Loading indicators

---

## 🧼 PHASE 8: Finalization

### Update Sidebar Menu

```typescript
menuItems = [
  { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { title: 'Employees', icon: 'people', route: '/employees' },
  { title: 'Departments', icon: 'business', route: '/departments' },
  { title: 'Leaves', icon: 'event', route: '/leaves' },
  { title: 'Documents', icon: 'folder', route: '/documents' },
  { title: 'AI Assistant', icon: 'smart_toy', route: '/ai/chat' },
  { title: 'Skills', icon: 'school', route: '/skills/catalog' },
  { title: 'CV Generator', icon: 'description', route: '/cv-generator' },
  { title: 'Settings', icon: 'settings', route: '/settings/users' }
];
```

### Delete Unused Demo Pages

Remove: `blank/`, `calender/`, `charts/`, `invoices/`, `ui-elements/`

### Final Checklist

- [ ] All 7 core modules functional
- [ ] Orange branding throughout
- [ ] Mock data displays correctly
- [ ] AI features demonstrate capabilities
- [ ] Role-based access visible in UI
- [ ] No console errors
- [ ] Mobile responsive (Material UI)
- [ ] Documentation updated

---

## 📊 Project Deliverables (Per Specifications)

**Applications:**
- ✅ Angular Web Application (Admin/HR interface)
- ⏳ Flutter Mobile App (Phase 7, weeks 13-14)
- ⏳ Laravel REST API (Backend team)

**Non-Functional Requirements:**
- API Response Time: < 500ms (95th percentile)
- Page Load Time: < 2 seconds
- Support: 500+ concurrent users
- Security: GDPR compliant, HTTPS, OWASP Top 10 protection
- Uptime Target: 99.5%

**Success Criteria:**
- ✅ AI functionality accurate (>85% satisfaction target)
- ✅ All main modules operational
- ✅ Test coverage > 80%
- ✅ Zero critical vulnerabilities

---

## 🎯 Development Timeline Reference

- **Phase 1-2** (Weeks 1-2): Authentication & Architecture ✅
- **Phase 2** (Weeks 3-4): Employee Management ✅  
- **Phase 3** (Weeks 5-6): Leave Management ← *Current focus*
- **Phase 4** (Weeks 7-8): Document Management
- **Phase 5** (Weeks 9-10): AI RAG Implementation
- **Phase 6** (Weeks 11-12): Skills & CV Generator
- **Phase 7** (Weeks 13-14): Mobile App
- **Phase 8** (Weeks 15-16): Testing & Deployment

---

**Total Frontend Implementation Time:** ~6 hours for all UI mockups  
**Backend Integration:** To be coordinated with API team  
**Mobile Development:** Separate Flutter implementation (weeks 13-14)