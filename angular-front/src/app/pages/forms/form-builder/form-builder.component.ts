import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

interface FormField {
    id: string;
    type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'file' | 'checkbox' | 'radio';
    label: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
    validation?: {
        min?: number;
        max?: number;
        pattern?: string;
    };
}

interface FormTemplate {
    id: number;
    name: string;
    description: string;
    category: string;
    fields: FormField[];
    workflow?: string[];
    createdAt: string;
    updatedAt: string;
    version: number;
    status: 'Draft' | 'Active' | 'Archived';
}

@Component({
    selector: 'app-form-builder',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, PageBreadcrumbComponent, ComponentCardComponent, ButtonComponent, BadgeComponent],
    templateUrl: './form-builder.component.html',
    styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
    availableFieldTypes = [
        { type: 'text', label: 'Texte', icon: '📝' },
        { type: 'number', label: 'Nombre', icon: '🔢' },
        { type: 'date', label: 'Date', icon: '📅' },
        { type: 'select', label: 'Liste déroulante', icon: '📋' },
        { type: 'textarea', label: 'Zone de texte', icon: '📄' },
        { type: 'file', label: 'Fichier', icon: '📎' },
        { type: 'checkbox', label: 'Case à cocher', icon: '☑️' },
        { type: 'radio', label: 'Bouton radio', icon: '🔘' }
    ];

    formTemplates: FormTemplate[] = [
        {
            id: 1,
            name: 'Demande de Formation',
            description: 'Formulaire pour les demandes de formation professionnelle',
            category: 'Formation',
            fields: [
                { id: 'title', type: 'text', label: 'Titre de la formation', required: true },
                { id: 'provider', type: 'text', label: 'Organisme', required: true },
                { id: 'dates', type: 'date', label: 'Date de début', required: true },
                { id: 'cost', type: 'number', label: 'Coût estimé', required: true },
                { id: 'justification', type: 'textarea', label: 'Justification', required: true }
            ],
            workflow: ['Manager', 'RH', 'Direction'],
            createdAt: '2024-01-15T10:00:00',
            updatedAt: '2024-02-10T14:30:00',
            version: 2,
            status: 'Active'
        },
        {
            id: 2,
            name: 'Demande de Matériel',
            description: 'Formulaire pour les demandes d\'équipement',
            category: 'Logistique',
            fields: [
                { id: 'equipment', type: 'text', label: 'Type de matériel', required: true },
                { id: 'quantity', type: 'number', label: 'Quantité', required: true },
                { id: 'urgency', type: 'select', label: 'Urgence', required: true, options: ['Faible', 'Moyenne', 'Haute'] },
                { id: 'reason', type: 'textarea', label: 'Raison', required: true }
            ],
            workflow: ['Manager', 'IT/Logistique'],
            createdAt: '2024-02-01T09:00:00',
            updatedAt: '2024-02-01T09:00:00',
            version: 1,
            status: 'Active'
        },
        {
            id: 3,
            name: 'Évaluation Annuelle',
            description: 'Formulaire d\'évaluation des performances',
            category: 'RH',
            fields: [
                { id: 'period', type: 'text', label: 'Période évaluée', required: true },
                { id: 'objectives', type: 'textarea', label: 'Objectifs atteints', required: true },
                { id: 'rating', type: 'select', label: 'Note globale', required: true, options: ['1', '2', '3', '4', '5'] },
                { id: 'comments', type: 'textarea', label: 'Commentaires', required: false }
            ],
            workflow: ['Manager', 'RH'],
            createdAt: '2024-01-05T11:00:00',
            updatedAt: '2024-01-20T16:00:00',
            version: 3,
            status: 'Active'
        }
    ];

    currentForm: FormTemplate | null = null;
    isCreatingNew = false;
    selectedFields: FormField[] = [];

    createNewForm() {
        this.isCreatingNew = true;
        this.currentForm = {
            id: 0,
            name: 'Nouveau Formulaire',
            description: '',
            category: '',
            fields: [],
            workflow: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            version: 1,
            status: 'Draft'
        };
        this.selectedFields = [];
    }

    editForm(form: FormTemplate) {
        this.currentForm = { ...form };
        this.selectedFields = [...form.fields];
        this.isCreatingNew = false;
    }

    addField(fieldType: any) {
        const newField: FormField = {
            id: `field_${Date.now()}`,
            type: fieldType.type,
            label: `Nouveau ${fieldType.label}`,
            required: false
        };
        this.selectedFields.push(newField);
    }

    removeField(index: number) {
        this.selectedFields.splice(index, 1);
    }

    moveFieldUp(index: number) {
        if (index > 0) {
            const temp = this.selectedFields[index];
            this.selectedFields[index] = this.selectedFields[index - 1];
            this.selectedFields[index - 1] = temp;
        }
    }

    moveFieldDown(index: number) {
        if (index < this.selectedFields.length - 1) {
            const temp = this.selectedFields[index];
            this.selectedFields[index] = this.selectedFields[index + 1];
            this.selectedFields[index + 1] = temp;
        }
    }

    saveForm() {
        if (this.currentForm) {
            this.currentForm.fields = [...this.selectedFields];
            this.currentForm.updatedAt = new Date().toISOString();
            console.log('Form saved:', this.currentForm);
            this.currentForm = null;
            this.isCreatingNew = false;
        }
    }

    cancelEdit() {
        this.currentForm = null;
        this.isCreatingNew = false;
        this.selectedFields = [];
    }

    getStatusColor(status: string): 'success' | 'warning' | 'error' | 'light' {
        switch (status) {
            case 'Active': return 'success';
            case 'Draft': return 'warning';
            case 'Archived': return 'light';
            default: return 'light';
        }
    }

    duplicateForm(form: FormTemplate) {
        const duplicate: FormTemplate = {
            ...form,
            id: Math.max(...this.formTemplates.map(f => f.id)) + 1,
            name: `${form.name} (Copie)`,
            status: 'Draft',
            version: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.formTemplates.push(duplicate);
    }

    archiveForm(form: FormTemplate) {
        form.status = 'Archived';
        form.updatedAt = new Date().toISOString();
    }
}
