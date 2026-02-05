import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { RouterLink } from '@angular/router';

interface ChatConversation {
  id: number;
  lastMessage: string;
  timestamp: string;
  sourceCount: number;
}

@Component({
  selector: 'app-conversation-history',
  standalone: true,
  imports: [CommonModule, PageBreadcrumbComponent, ComponentCardComponent, RouterLink],
  templateUrl: './conversation-history.component.html',
})
export class ConversationHistoryComponent {
  conversations: ChatConversation[] = [
    {
      id: 1,
      lastMessage: 'How many annual leave days do employees get?',
      timestamp: '2024-03-05 10:30',
      sourceCount: 1
    },
    {
      id: 2,
      lastMessage: 'What is the company policy on remote work?',
      timestamp: '2024-03-04 15:45',
      sourceCount: 2
    },
    {
      id: 3,
      lastMessage: 'Show me employment contracts for IT department',
      timestamp: '2024-03-02 09:12',
      sourceCount: 5
    }
  ];
}
