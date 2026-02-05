import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  sources?: { document: string; page: number; relevance: number }[];
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, PageBreadcrumbComponent, ComponentCardComponent, InputFieldComponent, ButtonComponent],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.css',
})
export class AiChatComponent {
  messages: Message[] = [
    { text: 'Hello! I am your AI HR Assistant. How can I help you today?', sender: 'ai', timestamp: new Date() }
  ];
  newMessage = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      text: this.newMessage,
      sender: 'user',
      timestamp: new Date()
    });

    const userMsg = this.newMessage.toLowerCase();
    this.newMessage = '';

    // Mock AI response
    setTimeout(() => {
      let response = "I'm still learning about our company documents. Could you please rephrase your HR question?";
      let sources: any[] = [];

      if (userMsg.includes('leave')) {
        response = "According to the HR policy document, employees receive 21 annual leave days per year. You currently have 15 days remaining.";
        sources = [{ document: 'HR_Policy_2024.pdf', page: 12, relevance: 0.95 }];
      } else if (userMsg.includes('department')) {
        response = "Our company has 8 main departments. Your current assignment is within the Information Technology department.";
        sources = [{ document: 'Org_Structure_Q1.pdf', page: 3, relevance: 0.88 }];
      }

      this.messages.push({
        text: response,
        sender: 'ai',
        timestamp: new Date(),
        sources: sources.length > 0 ? sources : undefined
      });
    }, 1000);
  }

  handleValueChange(value: string | number) {
    this.newMessage = value.toString();
  }
}
