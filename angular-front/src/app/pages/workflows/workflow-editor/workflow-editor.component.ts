import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

interface WorkflowNode {
    id: string;
    type: 'start' | 'approval' | 'condition' | 'end';
    label: string;
    approver?: string;
    condition?: string;
    actions: string[];
    position: { x: number; y: number };
}

interface WorkflowTemplate {
    id: number;
    name: string;
    description: string;
    category: string;
    nodes: WorkflowNode[];
    connections: { from: string; to: string }[];
    status: 'Brouillon' | 'Actif' | 'Archivé';
    createdAt: string;
    updatedAt: string;
}

@Component({
    selector: 'app-workflow-editor',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, BadgeComponent],
    templateUrl: './workflow-editor.component.html',
    styleUrl: './workflow-editor.component.css',
})
export class WorkflowEditorComponent {
    availableNodeTypes = [
        { type: 'approval', label: 'Approbation', icon: '✓', color: 'bg-primary-500' },
        { type: 'condition', label: 'Condition', icon: '?', color: 'bg-warning-500' },
    ];

    availableApprovers = [
        'Manager Direct',
        'Chef de Département',
        'Ressources Humaines',
        'Direction',
        'Finance',
        'IT/Logistique'
    ];

    workflows: WorkflowTemplate[] = [
        {
            id: 1,
            name: 'Congés Standards',
            description: 'Workflow pour les demandes de congés annuels',
            category: 'Congés',
            nodes: [
                { id: 'start', type: 'start', label: 'Début', actions: [], position: { x: 50, y: 50 } },
                { id: 'manager', type: 'approval', label: 'Manager', approver: 'Manager Direct', actions: ['Approuver', 'Rejeter', 'Demander modification'], position: { x: 200, y: 50 } },
                { id: 'hr', type: 'approval', label: 'RH', approver: 'Ressources Humaines', actions: ['Approuver', 'Rejeter'], position: { x: 350, y: 50 } },
                { id: 'end', type: 'end', label: 'Fin', actions: [], position: { x: 500, y: 50 } }
            ],
            connections: [
                { from: 'start', to: 'manager' },
                { from: 'manager', to: 'hr' },
                { from: 'hr', to: 'end' }
            ],
            status: 'Actif',
            createdAt: '2024-01-10T10:00:00',
            updatedAt: '2024-02-05T14:30:00'
        },
        {
            id: 2,
            name: 'Ordres de Mission',
            description: 'Workflow pour les ordres de mission avec validation budgétaire',
            category: 'Autorisations',
            nodes: [
                { id: 'start', type: 'start', label: 'Début', actions: [], position: { x: 50, y: 50 } },
                { id: 'manager', type: 'approval', label: 'Manager', approver: 'Manager Direct', actions: ['Approuver', 'Rejeter'], position: { x: 200, y: 50 } },
                { id: 'budget_check', type: 'condition', label: 'Budget > 1000€?', condition: 'budget > 1000', actions: [], position: { x: 350, y: 50 } },
                { id: 'finance', type: 'approval', label: 'Finance', approver: 'Finance', actions: ['Approuver', 'Rejeter'], position: { x: 500, y: 30 } },
                { id: 'direction', type: 'approval', label: 'Direction', approver: 'Direction', actions: ['Approuver', 'Rejeter'], position: { x: 650, y: 30 } },
                { id: 'end', type: 'end', label: 'Fin', actions: [], position: { x: 800, y: 50 } }
            ],
            connections: [
                { from: 'start', to: 'manager' },
                { from: 'manager', to: 'budget_check' },
                { from: 'budget_check', to: 'finance' },
                { from: 'budget_check', to: 'end' },
                { from: 'finance', to: 'direction' },
                { from: 'direction', to: 'end' }
            ],
            status: 'Actif',
            createdAt: '2024-01-15T11:00:00',
            updatedAt: '2024-01-15T11:00:00'
        }
    ];

    currentWorkflow: WorkflowTemplate | null = null;
    isCreatingNew = false;
    selectedNode: WorkflowNode | null = null;

    createNewWorkflow() {
        this.isCreatingNew = true;
        this.currentWorkflow = {
            id: 0,
            name: 'Nouveau Workflow',
            description: '',
            category: '',
            nodes: [
                { id: 'start', type: 'start', label: 'Début', actions: [], position: { x: 50, y: 100 } },
                { id: 'end', type: 'end', label: 'Fin', actions: [], position: { x: 700, y: 100 } }
            ],
            connections: [],
            status: 'Brouillon',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }

    editWorkflow(workflow: WorkflowTemplate) {
        this.currentWorkflow = JSON.parse(JSON.stringify(workflow));
        this.isCreatingNew = false;
    }

    addNode(nodeType: any) {
        if (!this.currentWorkflow) return;

        const newNode: WorkflowNode = {
            id: `node_${Date.now()}`,
            type: nodeType.type,
            label: nodeType.label,
            actions: nodeType.type === 'approval' ? ['Approuver', 'Rejeter'] : [],
            position: { x: 300, y: 100 }
        };

        this.currentWorkflow.nodes.push(newNode);
    }

    selectNode(node: WorkflowNode) {
        this.selectedNode = node;
    }

    deleteNode(nodeId: string) {
        if (!this.currentWorkflow) return;

        this.currentWorkflow.nodes = this.currentWorkflow.nodes.filter(n => n.id !== nodeId);
        this.currentWorkflow.connections = this.currentWorkflow.connections.filter(
            c => c.from !== nodeId && c.to !== nodeId
        );

        if (this.selectedNode?.id === nodeId) {
            this.selectedNode = null;
        }
    }

    saveWorkflow() {
        if (this.currentWorkflow) {
            this.currentWorkflow.updatedAt = new Date().toISOString();
            console.log('Workflow saved:', this.currentWorkflow);
            this.currentWorkflow = null;
            this.isCreatingNew = false;
            this.selectedNode = null;
        }
    }

    cancelEdit() {
        this.currentWorkflow = null;
        this.isCreatingNew = false;
        this.selectedNode = null;
    }

    getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
        switch (status) {
            case 'Actif': return 'success';
            case 'Brouillon': return 'warning';
            case 'Archivé': return 'light';
            default: return 'light';
        }
    }

    getNodeColor(type: string): string {
        switch (type) {
            case 'start': return 'bg-success-500';
            case 'approval': return 'bg-primary-500';
            case 'condition': return 'bg-warning-500';
            case 'end': return 'bg-gray-500';
            default: return 'bg-gray-400';
        }
    }

    duplicateWorkflow(workflow: WorkflowTemplate) {
        const duplicate: WorkflowTemplate = {
            ...JSON.parse(JSON.stringify(workflow)),
            id: Math.max(...this.workflows.map(w => w.id)) + 1,
            name: `${workflow.name} (Copie)`,
            status: 'Brouillon',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.workflows.push(duplicate);
    }

    archiveWorkflow(workflow: WorkflowTemplate) {
        workflow.status = 'Archivé';
        workflow.updatedAt = new Date().toISOString();
    }
}
